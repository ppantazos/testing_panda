import React from 'react';
import {Helmet} from 'react-helmet';
import {useIntl} from "react-intl";

type PageProps = {
    className?: string;
    title: string;
    children: NonNullable<React.ReactNode>
}

function Page(props: PageProps): JSX.Element {
    const {title, className, children, ...rest} = props;
    const {formatMessage: intl} = useIntl();

    return (
        <div className={className} {...rest}>
            <Helmet>
                <title>
                    {intl({id: `TestDom ${title}`})}
                </title>
            </Helmet>
            {children}
        </div>
    )
}

export default Page;
