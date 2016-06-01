import React, { PropTypes } from 'react';

/**
 * Toolbar Component
 */

class ScribeToolbar extends React.Component {
	render() {
		let toolBarOptions = [];
		for (const i in this.props.config) {
			let iconOrText
			if (this.props.config[i].text) {
				iconOrText = (
					<i className="fa">
						{this.props.config[i].text}
					</i>)
			} else {
				iconOrText = (<i className={ `fa ${this.props.config[i]['display']}` }/>)

			}
			toolBarOptions.push(
				<button data-command-name={ this.props.config[i]['command'] } key={ i }>
					{iconOrText}
				</button>
			);
		}

		return (
			<div className='sc-toolbar'>
				<button data-command-name='bold'>
					<i className='fa fa-bold'/>
				</button>
				<button data-command-name='italic'>
					<i className='fa fa-italic'/>
				</button>
				<button data-command-name='underline'>
					<i className='fa fa-underline'/>
				</button>
				{ toolBarOptions }
				<button data-command-name='undo'>
					<i className='fa fa-undo'/>
				</button>
				<button data-command-name='redo'>
					<i className='fa fa-repeat'/>
				</button>
			</div>
		);
	}
}

ScribeToolbar.propTypes = {
	config: PropTypes.shape({
		commands: PropTypes.arrayOf(PropTypes.shape({
			commmand: PropTypes.string.isRequired,
			display: PropTypes.string.isRequired,
			action: PropTypes.func
		}))
	})
};

export default ScribeToolbar;
