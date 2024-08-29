import React from 'react'
import PropTypes from "prop-types";



const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
	return (
		<tr>
			{isHeader ? (
				textSecondCell === null ? (
					<th colSpan="2">{textFirstCell}</th>
				) : (
					<>
						<th>{textFirstCell}</th>
						<th>{textSecondCell}</th>
					</>
				)
			) : (
				<>
					<td>{textFirstCell}</td>
					<td>{textSecondCell}</td>
				</>
			)}
		</tr>
	);
}


CourseListRow.defaultProps = {
	isHeader: false,
	textSecoundCell: null,
}

CourseListRow.propsTypes = {
	isHeader: PropTypes.bool,
	textFirstCell: PropTypes.string.isRequired,
	textSecoundCell: PropTypes.string
}

export default CourseListRow;