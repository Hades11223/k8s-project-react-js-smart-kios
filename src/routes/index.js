import Loadable from 'react-loadable';
import React, { Component } from 'react';
import './styles.scss'
function Loading() {
  return <div className='container'>
    <div className='loader'>
      <div className='loader--dot'></div>
      <div className='loader--dot'></div>
      <div className='loader--dot'></div>
      <div className='loader--dot'></div>
      <div className='loader--dot'></div>
      <div className='loader--dot'></div>
      <div className='loader--text'></div>
    </div>
  </div>;
}

const routes = [
  {
    path: ["/dang-nhap"],
    component: Loadable({
      loader: () => import('@user/containers/auth/LoginScreen'),
      loading: Loading,
    })
  },
  {
    path: ["/admin", "/admin/:function", "/admin/:function/:id"],
    component: Loadable({
      loader: () => import('@user/containers/home'),
      loading: Loading,
    })
  },
  {
    path: ["/home"],
    component: Loadable({
      loader: () => import('@user/containers/home'),
      loading: Loading,
    })
  },
  {
    path: ["/huong-dan-dat-kham-online"],
    component: Loadable({
      loader: () => import('@user/containers/guide/GuideBooking'),
      loading: Loading,
    })
  },
  {
    path: ["/tra-cuu-gia-dich-vu"],
    component: Loadable({
      loader: () => import('@user/containers/services/SearchServices'),
      loading: Loading,
    })
  },
  {
    path: ["/tim-vi-tri"],
    component: Loadable({
      loader: () => import('@user/containers/address/SearchAddress'),
      loading: Loading,
    })
  },
  {
    path: ["/xac-thuc-thong-tin"],
    component: Loadable({
      loader: () => import('@user/containers/ehealth/EhealthScreen'),
      loading: Loading,
    })
  },
  {
    path: ["/chi-duong"],
    component: Loadable({
      loader: () => import('@user/containers/address/DetailHospital'),
      loading: Loading,
    })
  },
  {
    path: ["/about"],
    component: Loadable({
      loader: () => import('@user/containers/intro/AboutScreen'),
      loading: Loading,
    })
  },
  {
    path: ["/y-ba-dien-tu"],
    component: Loadable({
      loader: () => import('@user/containers/ehealth/DetailEhealth'),
      loading: Loading,
    })
  },
  {
    path: ["/tu-van"],
    component: Loadable({
      loader: () => import('@user/containers/consultation'),
      loading: Loading,
    })
  },
  {
    path: ["/tu-van-khac"],
    component: Loadable({
      loader: () => import('@user/containers/consultation/DetailConSultation'),
      loading: Loading,
    })
  },
  {
    path: ["/chi-tiet-tu-van"],
    component: Loadable({
      loader: () => import('@user/containers/consultation/DetailConSultation'),
      loading: Loading,
    })
  },
  {
    path: ["/lay-so-tiep-don"],
    component: Loadable({
      loader: () => import('@user/containers/ticket/GetTicket'),
      loading: Loading,
    })
  },
  {
    path: ["/so-do-benh-vien"],
    component: Loadable({
      loader: () => import('@user/containers/address/AddressHospital'),
      loading: Loading,
    })
  },
  {
    path: ["/thoi-gian-lam-viec"],
    component: Loadable({
      loader: () => import('@user/containers/timeHospital/TimeHospital'),
      loading: Loading,
    })
  },
  {
    path: ["/muc-do-hai-long"],
    component: Loadable({
      loader: () => import('@user/containers/userSatisfied/AboutSatisfied'),
      loading: Loading,
    })
  },
  // {
  //   path: ["/", "/:course", "/:course/:alias", "/:course/:path2/:alias"],
  //   component: Loadable({
  //     loader: () => import('@user/template/LayoutTemplate'),
  //     loading: Loading,
  //   })
  // }
]

export default routes