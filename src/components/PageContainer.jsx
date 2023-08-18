import React from 'react'
import PageContainerStyled from "./styled/PageContainerStyled";
import ContentWrapper from "./ContentWrapper";
import Footer from "./Footer";

export default function PageContainer() {
    return (
        <PageContainerStyled>
            <ContentWrapper />
            <Footer />
        </PageContainerStyled>
    );
}
