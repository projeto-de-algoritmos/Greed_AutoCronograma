import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Col, Row, Form, FormGroup, Label, Input } from "reactstrap";
import "./styles.css";

export default function TaskListModal({
	taskList,
	updateTask,
	addTask,
}) {
	const [ taskName, setTaskName ] = useState(null);
	const [ taskDeadlineDay, setTaskDeadlineDay ] = useState(null);
	const [ taskDeadlineHour, setTaskDeadlineHour ] = useState(null);
	const [ taskDeadlineMinute, setTaskDeadlineMinute ] = useState(null);
	const [ taskTimeHour, setTaskTimeHour ] = useState(null);
	const [ taskTimeMinute, setTaskTimeMinute ] = useState(null);
	const [ show, setShow ] = useState(false);

	const toggleModal = () => setShow(!show);
	const submitTask = () => {
		if(taskName && taskDeadlineDay && taskDeadlineHour && taskDeadlineMinute && taskTimeHour &&	taskTimeMinute) {
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
		} else {
			alert("Todos os campos são necessários!");
		}
	};

	return (
		<>
		<Button onClick={toggleModal}>Adicionar tarefa</Button>

		<Modal isOpen={show} toggle={toggleModal}>
			<ModalHeader>Adicionar Tarefa</ModalHeader>

			<ModalBody>
				<Form>
					<FormGroup>
						<Label for="name">Nome da tarefa:</Label>
						<Input type="text" name="name" onChange={(e) => {
							setTaskName(e.target.value);
						}} />
					</FormGroup>

					<Label>Deadline:</Label>
					<Row form>
						<Col>
							<FormGroup>
								<Label for="day">Dia:</Label>
								<Input type="select" name="day" onChange={(e) => {
									setTaskDeadlineDay(e.target.value);
								}} >
									<option value="1">Domingo</option>
									<option value="2">Segunda-feira</option>
									<option value="3">Terça-feira</option>
									<option value="4">Quarta-feira</option>
									<option value="5">Quinta-feira</option>
									<option value="6">Sexta-feita</option>
									<option value="7">Sábado</option>
								</Input>
							</FormGroup>
						</Col>

						<Col>
							<FormGroup>
								<Label for="hour">Horas:</Label>
								<Input type="number" name="hour" min="0" max="23" onChange={(e) => {
									setTaskDeadlineHour(e.target.value);
								}} />
							</FormGroup>
						</Col>

						<Col>
							<FormGroup>
								<Label for="minute">Minutos:</Label>
								<Input type="number" name="minute" min="0" max="59" onChange={(e) => {
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
								<Input type="number" name="time-hour" min="0" max="23" onChange={(e) => {
									setTaskTimeHour(e.target.value);
								}} />
							</FormGroup>
						</Col>

						<Col>
							<FormGroup>
								<Label for="time-minute">Minutos:</Label>
								<Input type="number" name="time-minute" min="0" max="59" onChange={(e) => {
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
		</>
	);
}