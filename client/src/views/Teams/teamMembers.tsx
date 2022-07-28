import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { User } from '../../models/entities/User';
import { AppDispatch } from '../../redux/store';
// import { getTeamMembers } from "../../redux/actions/TeamActions";
import Page from '../../components/PageStructure/Page';
import PageHeader from '../../components/PageStructure/PageHeader';
import PageContent from '../../components/PageStructure/PageContent';
import { useParams } from 'react-router-dom';

function TeamMembers(): JSX.Element {
    let params:{teamId:string} = useParams();

    const dispatch: AppDispatch = useDispatch();

    // const [membersPage, setMembersPage] = useState<PageResource<User2>>(createEmptyPage());
    const [members, setMembers] = useState<User[]>([]);
    // const [editMode, setEditMode] = useState<boolean>(false);
    // const [selectedUser, setSelectedUser] = useState<User2>(empty_user);

    // useEffect(() => {
    //     const id = params.teamId

    //     dispatch(getTeamMembers(id))
    //         .then(foundPage => setMembers(foundPage))
    // })

    // const onUserSelected = (user: User2) => {
    //     setSelectedUser(user);
    // }

    return (
        <>
            <Page title="Team Members">
                <PageHeader title="Team Members" headerButton={{type:"create", onClickFuntion:()=>{}}}/>
                {/* <PageHeader title="Team Members" createButton={{onClickFuntion:()=>setVisible(true)}}/> */}
                <PageContent>
                    {/* <UsersTable setSelectedUser={onUserSelected} 
                                setEditMode={setEditMode} 
                                userPage={membersPage} 
                                setUsersPage={setMembersPage}/> */}
                </PageContent>
            </Page>
        </>
    )
}

export default TeamMembers;
