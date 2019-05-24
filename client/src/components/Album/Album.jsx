// **** REACT ****
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// **** STYLES ****
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

// **** COMPONENTS ****
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// **** CODE STARTS HERE ****
const styles = theme => ({
	appBar: {
		position: 'relative',
	},
	icon: {
		marginRight: theme.spacing.unit * 2,
	},
	heroUnit: {
		backgroundColor: theme.palette.background.paper,
	},
	heroContent: {
		maxWidth: 600,
		margin: '0 auto',
		padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
	},
	heroButtons: {
		marginTop: theme.spacing.unit * 4,
	},
	layout: {
		width: 'auto',
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
			width: 1100,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	cardGrid: {
		padding: `${theme.spacing.unit * 8}px 0`,
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing.unit * 6,
	},
});

const cards = [
	{
		"key": 1,
		"test": "Our House",
	},
	{
		"key": 2,
		"test": "Grandma's House",
	},
	{
		"key": 3,
		"test": "Dad's Work",
	}
];

class Album extends Component {

	render(props) {
		const { classes } = this.props;
		return (
			<React.Fragment>
				<CssBaseline />

				<main>
					{/* Hero unit */}
					<div className={classNames(classes.layout, classes.cardGrid)}>
						{/* End hero unit */}
						<Grid container spacing={40}>
							{cards.map(card => (
								<Grid item key={card} sm={6} md={4} lg={3}>
									<Card className={classes.card}>
										<CardMedia
											className={classes.cardMedia}
											image="https://png.pngtree.com/element_origin_min_pic/17/07/18/0b10451859a267aa49041e96e4bcb491.jpg" // eslint-disable-line max-len
											title="Image title"
										/>
										<CardContent className={classes.cardContent}>
											<Typography gutterBottom variant="h5" component="h2">
												{card.test}
											</Typography>
											<Typography>
												This is a media card. You can use this section to describe the content.
                    </Typography>
										</CardContent>
										<CardActions>
											<Button size="small" color="primary" href="/singleplan">
												View
                    </Button>
											<Button size="small" color="primary" href="/createplan">
												Edit
                    </Button>
										</CardActions>
									</Card>
								</Grid>
							))}
						</Grid>
					</div>
				</main>
				{/* Footer */}
				{/* <footer className={classes.footer}>
				<Typography variant="h6" align="center" gutterBottom>
					Footer
        </Typography>
				<Typography variant="subtitle1" align="center" color="textSecondary" component="p">
					Something here to give the footer a purpose!
        </Typography>
			</footer> */}
				{/* End footer */}
			</React.Fragment>
		);
	}
}

Album.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);