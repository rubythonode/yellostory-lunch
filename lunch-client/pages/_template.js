import React from 'react'
import Page from 'components/Page'
import Layout from 'components/Layout'
import { nextConnect } from 'next/connect'

@nextConnect((state) => state)
class Template extends Page {
    static async getInitialProps(ctx) {
        await super.getInitialProps(ctx)
        return {}
    }

    componentDidMount() {
        if (this.isMounted()) {
            this.setState({data: 'example'});
        }
    }

    render() {
        let { url } = this.props
        return (
            <Layout title="template" publicPage={ false } hideHeader={ false } { ...this.props } >
                <div className="container">
                    <h2>EXAMPLE</h2>
                </div>
            </Layout>
        )
    }
}

export default Template
