import React, { useEffect, useState } from 'react';
import Page from "../../components/PageStructure/Page";
import PageHeader from "../../components/PageStructure/PageHeader";
import PageContent from "../../components/PageStructure/PageContent";
import { AppDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { getJobs } from '../../redux/actions/JobActions';
import { PageResource } from '../../models/dtos/PageResource';
import { Job } from '../../models/entities/Job';
import { createEmptyPage } from '../../services/utils/PageResourceUtils';
import { CardItemSimple } from '../../models/cards/CardItem';
import { CardSimple } from '../../components/cards/CardSimple';
import { JobModal } from '../../components/modals/JobModal';
import { empty_job } from '../../services/EmptyEntities/EmptyJob';
import { org_id } from '../../assets/data/org';

function Jobs(): JSX.Element {

    const dispatch: AppDispatch = useDispatch();

    const [jobPage, setJobPage] = useState<PageResource<Job>>(createEmptyPage());
    const [jobSelected, setJobSelected] = useState<Job>(empty_job);
    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        dispatch(getJobs(org_id))
            .then(foundPage => setJobPage(foundPage))
    }, [])
    const constructCardItems = () => {

        let CardItems:CardItemSimple[] = []
        
        const jobs:Job[] =  jobPage.content
        jobs.forEach(job=>{
            if(job){
                CardItems.push({
                    id: job.id,
                    name: job.name,
                    description: job.description,
                    color: job.color
                })
            }
        })

        return CardItems
    }

    return (
        <Page title="Admin Panel-Jobs">
            <PageHeader title="Admin Panel/Jobs" headerButton={{type: "create",
                                                                onClickFuntion:()=>setVisible(true)}}/>
            <PageContent>
                <div className="site-card-border-less-wrapper">
                    {CardSimple(constructCardItems(), {hoverable:true, onClickFunction: ()=>setVisible(true), selectedItem:setJobSelected})}
                </div>
            <JobModal setJobsPage={setJobPage}
                      setVisible={setVisible}
                      visible={visible}
                      selectedJob={jobSelected}  
                      setJobSelected={setJobSelected}
                      jobPage={jobPage}
            />
            </PageContent>
        </Page>
    )
}

export default Jobs;