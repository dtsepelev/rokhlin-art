import React from 'react'
import { mount } from 'react-mounter'
import { FlowRouter } from 'meteor/kadira:flow-router'

import { Layout } from '/imports/ui/layouts/Layout.jsx'

import { Header } from '/imports/ui/components/header/Header.jsx'
import { Footer } from '/imports/ui/components/footer/Footer.jsx'
import { About } from '/imports/ui/components/about/About.jsx'
import { Contact } from '/imports/ui/components/contact/Contact.jsx'

import GalleryList from '/imports/ui/containers/GalleryList.jsx'
import PicturesList from '/imports/ui/containers/PicturesList.jsx'


FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(Layout, {
      header: <Header />,
      content: <GalleryList />,
      footer: <Footer />,
    })
  },
})


FlowRouter.route('/gallery/:slug', {
  name: 'gallery',
  action(params) {
    mount(Layout, {
      header: (<Header />),
      content: (<PicturesList slug={params.slug} />),
      footer: (<Footer />),
    })
  },
})


FlowRouter.route('/about', {
  name: 'about',
  action() {
    mount(Layout, {
      header: (<Header />),
      content: (<About />),
      footer: (<Footer />),
    })
  },
})


FlowRouter.route('/contact', {
  name: 'contact',
  action() {
    mount(Layout, {
      header: (<Header />),
      content: (<Contact />),
      footer: (<Footer />),
    })
  },
})