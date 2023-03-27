import React, { useReducer, useState } from 'react';
import Student from './components/Student';

export const ACTION_TYPES = {
	addStudent: 'add-student',
	deleteStudent: 'delete-student',
	markStudent: 'mark-student',
};

const initialState = {
	count: 1,
	students: [{ id: Date.now(), name: 'James', isHere: false }],
};
const reducer = (state, action) => {
	switch (action.type) {
		case ACTION_TYPES.addStudent:
			const name = action.payload.name;
			const newStudent = {
				id: Date.now(),
				name,
				isHere: false,
			};
			return {
				count: state.count + 1,
				students: [...state.students, newStudent],
			};
		case ACTION_TYPES.deleteStudent:
			return {
				count: state.count - 1,
				students: state.students.filter(
					(student) => student.id !== action.payload.id
				),
			};
		case ACTION_TYPES.markStudent:
			return {
				count: state.count,
				students: state.students.map((student) => {
					if (student.id === action.payload.id) {
						return { ...student, isHere: !student.isHere };
					}
					return student;
				}),
			};
		default:
			return state;
	}
};

export function Reducer2() {
	const [name, setName] = useState('');
	const [studentInfo, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<h1>출석부</h1>
			<p>총 학생 수: {studentInfo.count}</p>
			<input
				type='text'
				placeholder='이름을 입력해주세요'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button
				onClick={() =>
					dispatch({ type: ACTION_TYPES.addStudent, payload: { name } })
				}
			>
				추가
			</button>
			{studentInfo &&
				studentInfo.students.map((student) => {
					return (
						<Student
							key={student.id}
							name={student.name}
							dispatch={dispatch}
							id={student.id}
							isHere={student.isHere}
						/>
					);
				})}
		</div>
	);
}
