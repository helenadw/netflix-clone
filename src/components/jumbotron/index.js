import React from 'react';
import { Container, Item, Inner, Title, Subtitle, Image } from './styles/jumbotron'

export default function Jumbotron({ children, direction = 'row', ...restProps}) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>;
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>;
}

Jumbotron.Subtitle = function JumbotronSubtitle({ children, ...restProps}) {
    return <Subtitle {...restProps}>{children}</Subtitle>;
}

Jumbotron.Image = function JumbotronImage({ children, ...restProps}) {
    return <Image {...restProps}>{children}</Image>;
}