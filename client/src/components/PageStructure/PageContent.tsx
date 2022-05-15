import React from 'react';

type PageContentProps = {
    className?: string;
    children: NonNullable<React.ReactNode>
}

function PageContent(props: PageContentProps): JSX.Element {
    const {className, children, ...rest} = props;

    return (
        <div className={className} {...rest}>
            {children}
        </div>
    )
}

export default PageContent;
