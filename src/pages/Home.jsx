import { response } from 'msw';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import StepOne from '../../components/StepOne';
import StepThree from '../../components/StepThree';
import StepTwo from '../../components/StepTwo';

const Home = () => {
  const navigate = useNavigate();

  // const onSubmit = () => navigate('/posts');

  const [data, setData] = useState({
    emailId: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    countryCode: '',
    phoneNumber: '',
    acceptTermAndCondition: '',
  });

  const [currentStep, setCurrentStep] = useState(0);
  const sendData = formData => {
    console.log('form sumitted', formData);

    const API_URL = 'https://codebuddy.review/submit';

    fetch(`${API_URL}`, {
      method: 'post',
      headers: { 'content-Type': 'application/json' },
      body: formData,
    })
      .then(res => response.json())
      .then(dataJson => {
        return dataJson.data;
      })
      .catch(err => {
        console.log(err);
      });
    navigate('/posts');
  };

  const handleNextStep = (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev + 1);
    if (final) {
      sendData(newData);
      return;
    }
  };

  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
    <StepThree next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  console.log(data);
  return (
    <>
      <div>{steps[currentStep]}</div>
    </>
  );
};

export default Home;
