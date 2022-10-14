import React from 'react';

import {
    ResourcesListSection, SectionSubHeading, SectionHeading, Heading, ListContent, List, Link
} from "./RoadmapResourcesElements";

const RoadmapResources = () => {
    return (
        <ResourcesListSection>
            <SectionHeading>Web3 Resources</SectionHeading>
            <SectionSubHeading>Resources are in order</SectionSubHeading>

            <Heading> Web 3 </Heading>
            <ListContent>
                <List>
                    <Link href={"https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=101083s&ab_channel=freeCodeCamp.org"} target={"_blank"}>
                        Blockchain tutorials
                    </Link>
                </List>
            </ListContent>
        </ResourcesListSection>
    );
};

export default RoadmapResources;
