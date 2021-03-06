import { styled } from "@mui/material";
import React from "react";
import Header from "./Header";
import background from "src/assets/bg.png"
import './index.css';

const MainContentWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(5, 2, 9, 2),
    marginLeft: 0,
    height: '100%',
    width: '100%',
    transition: 'margin-left 300ms ease',
    [theme.breakpoints.up('xsm')]: {
      padding: theme.spacing(5, 4, 5, 4),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5, 2, 5, 2),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(5, 4, 5, 4),
    },
  }));
interface Props{
    children: React.ReactElement
}
export default function MainLayout(props: Props) {
    const {children} = props
    return <div 
    className="d"
    style={{
      position: 'relative',
      width: '100%'
    }}>
      <img
      className="bg"
      style={{ 
        backgroundImage: `url(${background})`, 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover", 
        width: '100%',
        height: '100%',
        position: "absolute",
        zIndex: -5,
        opacity: 0.5
      }}
      />
        <Header/>
        <MainContentWrapper>{children}</MainContentWrapper>
    </div>
}