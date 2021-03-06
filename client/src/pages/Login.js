import React, { Component } from "react";
import userAPI from "../utils/userAPI";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import "./style.css";

class Login extends Component {
	state = {
		email: "",
		password: "",
	};

	componentDidMount() {}

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		if (this.state.email && this.state.password) {
			userAPI
				.loginUser({
					email: this.state.email,
					password: this.state.password,
				})
				.then((res) => {
					if (res.status === 200) {
						this.props.setUserState(res.data);
					}
				})
				.catch((err) => console.log(err));
		}
	};

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="12">
						<form className="main">
							Email
							<Input
								value={this.state.email}
								onChange={this.handleInputChange}
								name="email"
								placeholder="Email (required)"
								className="main-button"
							/>
							Password
							<Input
								value={this.state.password}
								onChange={this.handleInputChange}
								name="password"
								placeholder="Password (required)"
								type="password"
								className="main-button"
							/>
							<FormBtn
								disabled={!(this.state.email && this.state.password)}
								onClick={this.handleFormSubmit}
								className="main-button"
							>
								Log in
							</FormBtn>
							<Link to="/signup">
								<FormBtn className="main-button"> Signup </FormBtn>
							</Link>
						</form>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Login;
