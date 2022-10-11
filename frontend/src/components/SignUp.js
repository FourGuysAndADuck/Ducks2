import {
    CButton,
    CCol,
    CForm,
    CFormCheck, CFormFeedback,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CInputGroup,
    CInputGroupText
} from "@coreui/react";

import {useState} from "react";
import {useNavigate} from "react-router-dom";

const SignUp = () => {

    const [firstName, setFirstname]  = useState('');
    const [lastName, setLastname]  = useState('');
    const [username, setUsername]  = useState('');
    const [email, setEmail]  = useState('');
    const [password, setPassword]  = useState('');
    const [stateAddress, setStateAddress]  = useState('');
    const [streetAddress, setStreetAddress]  = useState('');
    const [zipCode, setZipCode]  = useState('');
    const [isPending, setIsPending] = useState(false);
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
          const form = e.currentTarget
          if (form.checkValidity() === false) {
                e.preventDefault()
                e.stopPropagation()
              }
          setValidated(true)

        const newUser = {firstName, lastName, username, email, password, stateAddress, streetAddress, zipCode};

        setIsPending(true);

        fetch('http://localhost:8080/api/users/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*"},
            body: JSON.stringify(newUser)
        }).then(() => {
            console.log('new user added');
            setIsPending(false);
            navigate('/login');
        })
    }

    return(
        <div className="container" id="register">
            <CForm
                className="row g-3 needs-validation"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <CCol md={4}>
                  <CFormInput
                    type="text"
                    placeholder="Enter first name"
                    feedbackValid="Looks good!"
                    id="firstName"
                    label="First name"
                    required
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </CCol>
                <CCol md={4}>
                  <CFormInput
                    type="text"
                    placeholder="Enter last name"
                    feedbackValid="Looks good!"
                    id="lastName"
                    label="Last name"
                    required
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </CCol>
                <CCol md={4}>
                    <CFormInput
                        type="email"
                        placeholder="Enter your email"
                        feedbackValid="Looks good!"
                        id="emailSubmit"
                        label="Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="validationCustomUsername">Username</CFormLabel>
                  <CInputGroup className="has-validation">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      type="text"
                      aria-describedby="inputGroupPrependFeedback"
                      feedbackValid="Please choose a username."
                      id="usernameSubmit"
                      required
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </CInputGroup>
                </CCol>
                <CCol md={4}>
                    <CFormLabel htmlFor="validationCustomPassword">Password</CFormLabel>
                    <CInputGroup className="has-validation">
                        <CFormInput
                            type="password"
                            aria-describedby="inputGroupPrependFeedback"
                            feedbackValid="Please choose a password."
                            id="CustomPassword"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </CInputGroup>
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    aria-describedby="validationCustom03Feedback"
                    feedbackInvalid="Please provide a valid city."
                    id="validationCustom03"
                    label="City"
                    required
                    onChange={(e) => setStreetAddress(e.target.value)}
                  />
                </CCol>
                <CCol md={3}>
                  <CFormSelect
                    aria-describedby="validationCustom04Feedback"
                    feedbackInvalid="Please select a valid state."
                    id="stateSubmit"
                    label="State"
                    required
                    onChange={(e) => setStateAddress(e.target.value)}
                  >
                    <option disabled>Choose...</option>
                      <option>TX</option>
                      <option>AZ</option>
                      <option>VA</option>
                      <option>CA</option>
                      <option>FL</option>
                      <option>WA</option>
                      <option>HI</option>
                      <option>NC</option>
                      <option>SC</option>
                      <option>GA</option>
                  </CFormSelect>
                </CCol>
                <CCol md={3}>
                      <CFormInput
                    type="text"
                    aria-describedby="validationCustom05Feedback"
                    feedbackInvalid="Please provide a valid zip."
                    id="zipCodeSubmit"
                    label="Zip"
                    required
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </CCol>
                <CCol xs={12}>
                      <CFormCheck
                    type="checkbox"
                    id="invalidCheck"
                    label="Agree to terms and conditions"
                    required
                  />
                  <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
                </CCol>
                <CCol xs={12}>
                {!isPending && <CButton color="primary" type="submit">Submit form</CButton>}
                {isPending && <CButton color="primary" disabled>Submitting form...</CButton>}

        </CCol>
      </CForm>
        </div>
    );
}

export default SignUp;