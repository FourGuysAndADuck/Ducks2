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
import {useHistory} from "react-router-dom";

const SignUp = () => {

    const [first_name, setFirst_name]  = useState('');
    const [last_name, setLast_name]  = useState('');
    const [username, setUsername]  = useState('');
    const [password, setPassword]  = useState('');
    const [state_address, setState_address]  = useState('');
    const [street_address, setStreet_address]  = useState('');
    const [zip_code, setZip_code]  = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const [validated, setValidated] = useState(false)

    const handleSubmit = (e) => {
          const form = e.currentTarget
          if (form.checkValidity() === false) {
                e.preventDefault()
                e.stopPropagation()
              }
          setValidated(true)

        const newUser = {first_name, last_name, username, password, state_address, street_address, zip_code};

        setIsPending(true);

        fetch('http://localhost:8080/api/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
        }).then(() => {
            console.log('new user added');
            setIsPending(false);
            history.push('/login');
        })
    }

    return(
        <div className="container">
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
                    id="validationCustom01"
                    label="First name"
                    required
                    onChange={(e) => setFirst_name(e.target.value)}
                  />
                </CCol>
                <CCol md={4}>
                  <CFormInput
                    type="text"
                    placeholder="Enter last name"
                    feedbackValid="Looks good!"
                    id="validationCustom02"
                    label="Last name"
                    required
                    onChange={(e) => setLast_name(e.target.value)}
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
                      id="validationCustomUsername"
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
                            id="validationCustomPassword"
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
                    onChange={(e) => setStreet_address(e.target.value)}
                  />
                </CCol>
                <CCol md={3}>
                  <CFormSelect
                    aria-describedby="validationCustom04Feedback"
                    feedbackInvalid="Please select a valid state."
                    id="validationCustom04"
                    label="State"
                    required
                    onChange={(e) => setState_address(e.target.value)}
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
                    id="validationCustom05"
                    label="Zip"
                    required
                    onChange={(e) => setZip_code(e.target.value)}
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