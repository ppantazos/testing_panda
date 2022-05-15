import React from 'react';
import Page from "../../components/PageStructure/Page";
import PageHeader from "../../components/PageStructure/PageHeader";
import PageContent from "../../components/PageStructure/PageContent";
// import { connect } from 'react-redux';

function Overview(): JSX.Element {
    return (
        <Page title="Overview">
            <PageHeader title="overview.page.title"/>
            <PageContent>
                Overview content
            </PageContent>
        </Page>
    )
}
  
export default Overview;
// function mapStateToProps(state:any) {
//     return { propOne: state.propOne };
//   } 
  
// export default connect(mapStateToProps)(Overview);

