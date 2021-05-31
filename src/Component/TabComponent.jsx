import React,{useState, useEffect} from 'react';
import "../Styles/TabComponent.css";
import {Tabs, Tab, Box, Typography} from "@material-ui/core";
import {getCricketMatches} from "../Services/cricket-api";
import Score from "./Score";

const TabComponent = () => {
    const [value, setValue] = useState(0);
    const [matches, setMatches] = useState([])
    useEffect(()=>{
        getCricketMatches().then(data => {
            setMatches(data.matches);
            console.log(data.matches);
        }).catch(error => console.log(error));
    },[]);
    
    const handleChange = (e, value) =>{
        setValue(value);
    }

    function getData(type){
        return(
            matches.map(match =>{
                return(
                    <>
                        {   
                            match.type === type 
                            ? <Score match={match} key={match.unique_id} />
                            : ""
                        }
                    </>
                )
            })
        )
    }

    function TabPanel(props){
        return(
            <Box>
                {props.index === props.value && (
                    <Box>
                        <Typography>{props.children}</Typography>
                    </Box>
                )}  
            </Box>
        )
    }
    return (
        <>
            <div className="tabComponent_wraper">
                <Tabs value={value}  onChange={handleChange} indicatorColor="primary">
                    <Tab label="One Day" />
                    <Tab label="Twenty20" />
                    <Tab label="Test" />
                </Tabs>
            </div>
            <TabPanel index={0} value={value}>
                {getData("")}
            </TabPanel>
            <TabPanel index={1} value={value}>
                {getData("Twenty20")}
            </TabPanel>
            <TabPanel index={2} value={value}>
                {getData("Tests")}
            </TabPanel>
        </>
    )
}

export default TabComponent
