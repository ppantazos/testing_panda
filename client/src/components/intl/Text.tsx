import React from 'react';
import {useIntl} from 'react-intl';

type TextProps = {
    id: string;
}

function Text(props: TextProps): JSX.Element {
    const {formatMessage: intl} = useIntl();

    return <>{intl({id: props.id})}</>
}

export default Text;
