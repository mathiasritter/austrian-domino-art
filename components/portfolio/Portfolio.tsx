import React, { useCallback, useMemo } from "react";
import { Theme } from "../../theme/theme";
import { Box, Hidden, Typography, useMediaQuery } from "@material-ui/core";
import { SwipeWrapper } from "./SwipeWrapper";
import { Grid } from "./Grid";
import PortfolioCard from "./PortfolioCard";
import { scrollToElement } from "../common/scroll";
import { usePaginatedProjects } from "./usePaginatedProjects";
import { Pagination } from "@material-ui/lab";

const Portfolio: React.FC = () => {
    const {
        page,
        pageCount,
        setPage,
        minIndex,
        maxIndex,
    } = usePaginatedProjects();

    const projects = useMemo(() => {
        const projects = [];
        for (let i = minIndex; i < maxIndex; i++) {
            projects.push(<PortfolioCard key={i} projectIndex={i} />);
        }
        return projects;
    }, [minIndex, maxIndex]);

    const atLeastSm = useMediaQuery((theme: Theme) =>
        theme.breakpoints.up("sm")
    );

    const scrollToTop = useCallback(() => scrollToElement("portfolio"), []);

    const swipeSetPage = useCallback(
        (newPage: number) => {
            setPage(newPage);
            scrollToTop();
        },
        [setPage]
    );
    const paginationSetPage = useCallback(
        (event: React.SyntheticEvent, newPage: number) => swipeSetPage(newPage),
        [setPage]
    );

    return (
        <>
            <Typography variant="h1" gutterBottom>
                Portfolio
            </Typography>
            <SwipeWrapper
                page={page}
                setPage={swipeSetPage}
                pageCount={pageCount}
            >
                <Grid>{projects}</Grid>
                <Box
                    mt={4}
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                >
                    <Pagination
                        siblingCount={atLeastSm ? 1 : 0}
                        color="primary"
                        size={atLeastSm ? "large" : "medium"}
                        page={page}
                        onChange={paginationSetPage}
                        count={pageCount}
                    />
                    <Box mt={2} />
                    <Hidden mdUp implementation="css">
                        <Typography variant="body2" color="textSecondary">
                            Swipe to change page
                        </Typography>
                    </Hidden>
                </Box>
            </SwipeWrapper>
        </>
    );
};

export default Portfolio;
