import React, { useEffect, useState } from 'react';
import Page from "../../components/PageStructure/Page";
import PageHeader from "../../components/PageStructure/PageHeader";
import PageContent from "../../components/PageStructure/PageContent";
import { AppDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { getTeamStats } from '../../redux/actions/TeamActions';
import { PageResource } from '../../models/dtos/PageResource';
import { Team, TeamStats } from '../../models/entities/Team';
import { createEmptyPage } from '../../services/utils/PageResourceUtils';
// import Pie from '../../components/Charts/pie';
import { User } from '../../models/entities/User';
import { TeamCard } from '../../components/cards/TeamCard';
import { CardItem } from '../../models/entities/Helpers/CardItem'
// import { TeamModal } from '../../components/Modals/';

function Teams(): JSX.Element {

    const dispatch: AppDispatch = useDispatch();
    
    const [visible, setVisible] = useState<boolean>(false);

    const [teamPage, setTeamPage] = useState<PageResource<Team>>(createEmptyPage());
    const [teamStats, setTeamsStats] = useState<PageResource<TeamStats>>(createEmptyPage());

    // useEffect(() => {
    //     dispatch(getTeamStats())
    //         .then(foundPage => setTeamsStats(foundPage))
    // })


    const get_colors_and_data = (members:User[]) => {
        let pie_data: {
            colors: string[],
            data: {x: string, y: number}[]
        } = {colors:[], data:[]};

        members.forEach(member=> {
            member.jobs?.forEach(job=>{
                if(!pie_data.colors.includes(job.color)){
                    pie_data.colors.push(job.color)
                    pie_data.data.push({x: job.name, y:1})
                }else{
                    pie_data.data[pie_data.colors.indexOf(job.color)].y++
                }
            })
        })

        return pie_data
    }

    // const constructCardData = () => {

    //     const cardItems:CardItem[] = []

    //     const teams:Team[] = teamPage.content

    //     teams.forEach(team=>{
    //         const pie_data = get_colors_and_data(team.members);

    //         cardItems.push({
    //             id: team.id,
    //             link: `/panel/team/${team.id}/members`,
    //             icon: Pie(pie_data.colors, pie_data.data),
    //             name: team.name,
    //             description: team.description
    //         })
    //     })
    //     return cardItems

    // }

    return (
        <Page title="Admin Panel-Teams">
            <PageHeader title="Admin Panel/Teams"
                        headerButton={{ type:"create",
                                        onClickFuntion:()=>setVisible(true)}}/>
            <PageContent>
                {/* <TeamCard items={constructCardData()}/>
                <TeamModal  visible={visible}
                            setVisible={setVisible}
                            setTeamPage={setTeamPage} 
                /> */}
            </PageContent>
        </Page>
    )
}

export default Teams;