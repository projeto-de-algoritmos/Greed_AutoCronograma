import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Col, Row, Form, FormGroup, Label, Input } from "reactstrap";
import "./styles.css";

export default function TaskListModal({
	addTask,
	taskList,
	modalTask,
	isVisible,
	updateTask,
	setVisible,
	targetTask,
}) {
	const [ taskName, setTaskName ] = useState(null);
	const [ taskDeadlineDay, setTaskDeadlineDay ] = useState(null);
	const [ taskDeadlineHour, setTaskDeadlineHour ] = useState(null);
	const [ taskDeadlineMinute, setTaskDeadlineMinute ] = useState(null);
	const [ taskTimeHour, setTaskTimeHour ] = useState(null);
	const [ taskTimeMinute, setTaskTimeMinute ] = useState(null);

	const toggleModal = () => setVisible(!isVisible);
	const submitTask = () => {
		if(taskName && taskDeadlineDay && taskDeadlineHour != null && taskDeadlineMinute != null && taskTimeHour != null &&	taskTimeMinute != null) {
			if(modalTask) {
				addTask({
					name: taskName,
					deadline: {
						day: parseInt(taskDeadlineDay),
						hour: parseInt(taskDeadlineHour),
						minute: parseInt(taskDeadlineMinute)
					},
					time: {
						hour: parseInt(taskTimeHour),
						minute: parseInt(taskTimeMinute)
					}
				});

			}

			else {
				updateTask(targetTask, {
					name: taskName,
					deadline: {
						day: parseInt(taskDeadlineDay),
						hour: parseInt(taskDeadlineHour),
						minute: parseInt(taskDeadlineMinute)
					},
					time: {
						hour: parseInt(taskTimeHour),
						minute: parseInt(taskTimeMinute)
					}
				});
			}

			toggleModal();
		} else {
			alert("Todos os campos são necessários!");
		}
	};

	return (
		<Modal isOpen={isVisible} toggle={toggleModal} onOpened={() => {
			if(modalTask) {
				setTaskName(null);
				setTaskDeadlineDay(null);
				setTaskDeadlineHour(null);
				setTaskDeadlineMinute(null);
				setTaskTimeHour(null);
				setTaskTimeMinute(null);
			}

			else {
				setTaskName(taskList[targetTask].name);
				setTaskDeadlineDay(taskList[targetTask].deadline.day);
				setTaskDeadlineHour(taskList[targetTask].deadline.hour);
				setTaskDeadlineMinute(taskList[targetTask].deadline.minute);
				setTaskTimeHour(taskList[targetTask].time.hour);
				setTaskTimeMinute(taskList[targetTask].time.minute);
			}
		}}>
			<ModalHeader>{modalTask ? "Adicionar Tarefa" : "Editar Tarefa" + targetTask}</ModalHeader>

			<ModalBody>
				<Form>
					<FormGroup>
						<Label for="name">Nome da tarefa:</Label>
						<Input value={taskName} type="text" name="name" onChange={(e) => {
							setTaskName(e.target.value);
						}} />
					</FormGroup>

					<Label>Deadline:</Label>
					<Row form>
						<Col>
							<FormGroup>
								<Label for="day">Dia:</Label>
								<Input value={taskDeadlineDay} type="select" name="day" onChange={(e) => {
									setTaskDeadlineDay(e.target.value);
								}} >
									<option value="0"></option>
									<option value="1">Domingo</option>
									<option value="2">Segunda-feira</option>
									<option value="3">Terça-feira</option>
									<option value="4">Quarta-feira</option>
									<option value="5">Quinta-feira</option>
									<option value="6">Sexta-feira</option>
									<option value="7">Sábado</option>
								</Input>
							</FormGroup>
						</Col>

						<Col>
							<FormGroup>
								<Label for="hour">Horas:</Label>
								<Input value={taskDeadlineHour} type="number" name="hour" min="0" max="23" onChange={(e) => {
									setTaskDeadlineHour(e.target.value);
								}} />
							</FormGroup>
						</Col>

						<Col>
							<FormGroup>
								<Label for="minute">Minutos:</Label>
								<Input value={taskDeadlineMinute} type="number" name="minute" min="0" max="59" onChange={(e) => {
									setTaskDeadlineMinute(e.target.value);
								}} />
							</FormGroup>
						</Col>
					</Row>

					<Label>Tempo estimado:</Label>
					<Row>
						<Col>
							<FormGroup>
								<Label for="time-hour">Horas:</Label>
								<Input value={taskTimeHour} type="number" name="time-hour" min="0" max="23" onChange={(e) => {
									setTaskTimeHour(e.target.value);
								}} />
							</FormGroup>
						</Col>

						<Col>
							<FormGroup>
								<Label for="time-minute">Minutos:</Label>
								<Input value={taskTimeMinute} type="number" name="time-minute" min="0" max="59" onChange={(e) => {
									setTaskTimeMinute(e.target.value);
								}} />
							</FormGroup>
						</Col>
					</Row>
				</Form>
			</ModalBody>

			<ModalFooter>
				<Button onClick={submitTask}>Adicionar</Button>
				<Button onClick={toggleModal}>Cancelar</Button>
			</ModalFooter>
		</Modal>
	);
}