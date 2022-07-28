import React, { useEffect, useState } from 'react';
import Page from "../../components/PageStructure/Page";
import PageHeader from "../../components/PageStructure/PageHeader";
import PageContent from "../../components/PageStructure/PageContent";
import { AppDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { getTeamStats } from '../../redux/actions/TeamActions';
import { PageResource } from '../../models/dtos/PageResource';
import { TeamStats, TeamPieStats } from '../../models/entities/Team';
import { createEmptyPage } from '../../services/utils/PageResourceUtils';
import Pie from '../../components/Charts/pie';
import { TeamCard } from '../../components/cards/TeamCard';
import { CardItem } from '../../models/entities/Helpers/CardItem'
import { TeamModal } from '../../components/modals/TeamModal';

function Teams(): JSX.Element {

    const dispatch: AppDispatch = useDispatch();
    
    const [visible, setVisible] = useState<boolean>(false);

    const [teamPage, setTeamPage] = useState<PageResource<TeamStats>>(createEmptyPage());
    const [teamsStats, setTeamsStats] = useState<PageResource<TeamStats>>(createEmptyPage());

    useEffect(() => {
        dispatch(getTeamStats())
            .then(foundPage => setTeamsStats(foundPage))
    }, [])


    const get_colors_and_data = (team_pie_stats:TeamPieStats) => {
        let pie_data: {
            colors: string[],
            data: {x: string, y: number}[]
        } = {colors:[], data:[]};
        
        team_pie_stats.jobs.forEach(job=> {
            if(!pie_data.colors.includes(job.color)){
                pie_data.colors.push(job.color)
                pie_data.data.push({x: job.name, y:1})
            }else{
                pie_data.data[pie_data.colors.indexOf(job.color)].y++
            }
        })

        return pie_data
    }

    const constructCardData = () => {

        let cardItems:CardItem[] = []

        const teams_stats: TeamStats[] = teamsStats.content

        teams_stats.forEach(team_stats=>{
            const pie_data = get_colors_and_data(team_stats);

            cardItems.push({
                id: team_stats.id,
                link: `/panel/team/${team_stats.id}/members`,
                icon: Pie(pie_data.colors, pie_data.data),
                name: team_stats.name,
                description: team_stats.description
            })
        })
        return cardItems

    }

    return (
        <Page title="Admin Panel-Teams">
            <PageHeader title="Admin Panel/Teams"
                        headerButton={{ type:"create",
                                        onClickFuntion:()=>setVisible(true)}}/>
            <PageContent>
                <TeamCard items={constructCardData()}/>
                <TeamModal  visible={visible}
                            setVisible={setVisible}
                            setTeamPage={setTeamPage} 
                />
            </PageContent>
        </Page>
    )
}

export default Teams;