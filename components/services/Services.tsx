import React from "react";
import ServiceCard from "./ServiceCard";
import { Typography } from "@material-ui/core";
import GroupIcon from "@material-ui/icons/Group";
import VideocamIcon from "@material-ui/icons/Videocam";
import TvIcon from "@material-ui/icons/Tv";
import { ServiceGrid } from "./ServiceGrid";

const Services: React.FC = () => (
    <>
        <Typography variant="h1">Services</Typography>
        <Typography variant="h4" component="div" gutterBottom>
            We look forward to working with you on an individual domino project!
        </Typography>
        <ServiceGrid>
            <ServiceCard
                name="Advertisement"
                description="Attract the viewer's attention with an eye-catching chain reaction: a truly unique way to advertise your product, business or anything else."
                icon={VideocamIcon}
                iconSize={150}
                exampleSlug="canaletto-penthouse"
            />
            <ServiceCard
                name="Entertainment"
                description="Fascinate thousands with a continuous domino run that sets new standards: online, on TV and/or with live audience at your event or show."
                icon={TvIcon}
                iconSize={125}
                exampleSlug="el-hormiguero-kloss-skrein"
            />
            <ServiceCard
                name="Workshop"
                description="Improve communication, concentration and teamwork within your team: whether it be employees, colleagues, students or any other group."
                icon={GroupIcon}
                iconSize={135}
                exampleSlug="yorkshire-tea-biscuit-brew"
            />
        </ServiceGrid>
    </>
);

export default Services;
