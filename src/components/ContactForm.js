import React, { useState } from "react";
import styled from "styled-components";
import { Paperclip } from "lucide-react";
import contactImage from "../assest/contactImage.png";

const FormContainer = styled.div`
  min-height: 100vh;
  background: #fff url(${contactImage}) no-repeat center center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      125deg,
      transparent 20%,
      rgba(12, 42, 162, 0.18) 40%,
      transparent 70%
    );
    transform: skewY(-20deg);
  }

  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: radial-gradient(
      circle at center,
      transparent 0%,
      rgba(255, 255, 255, 0.03) 50%,
      transparent 100%
    );
    transform: rotate(45deg);
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  position: relative;
  z-index: 2;
`;

const Title = styled.h2`
  color: #5BDCE3;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const StyledForm = styled.form`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  padding: 0.5rem 0;
  color: white;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #5BDCE3;
  }

  &::placeholder {
    color: white;
  }
`;

const FileUploadLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const FileText = styled.div`
  font-size: 0.875rem;
  color: white;
`;

const FileInput = styled.input`
  display: none;
`;

const CheckboxWrapper = styled.div`
  margin-top: 1rem;
`;

const PrivacyText = styled.div`
  color: white;
  font-size: 12px;
  margin-bottom: 1rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: white;
  font-size: 0.875rem;
  cursor: pointer;
`;

const Checkbox = styled.input`
  cursor: pointer;
  margin-top: 3px;
`;

const PrivacyLink = styled.a`
  color: #5BDCE3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SendMessageButton = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(91, 220, 227, 0.2);
    color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectInfo: "",
    newsletter: false,
    file: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 20 * 1024 * 1024) {
      setFormData((prev) => ({ ...prev, file }));
    } else {
      alert("File size must be less than 20MB");
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <FormContainer>
      <FormWrapper>
        <Title>Contact us</Title>
        <StyledForm onSubmit={handleSubmit}>
          <InputGroup>
            <InputWrapper>
              <Input
                type="text"
                name="name"
                required
                placeholder="Name*"
                value={formData.name}
                onChange={handleInputChange}
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                type="email"
                name="email"
                required
                placeholder="Email*"
                value={formData.email}
                onChange={handleInputChange}
              />
            </InputWrapper>
            <FileUploadLabel>
              <Paperclip size={20} />
              <div>
                Attach your file
                <FileText>up to 20MB</FileText>
              </div>
              <FileInput type="file" onChange={handleFileChange} accept="*/*" />
            </FileUploadLabel>
          </InputGroup>

          <InputGroup>
            <InputWrapper>
              <Input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                type="text"
                name="projectInfo"
                required
                placeholder="Project Info (Budget if avail.)*"
                value={formData.projectInfo}
                onChange={handleInputChange}
              />
            </InputWrapper>
            <CheckboxWrapper>
              <PrivacyText>
                We will process your personal information in accordance with our{" "}
                <PrivacyLink href="#">Privacy Policy</PrivacyLink>
              </PrivacyText>
              <CheckboxLabel>
                <Checkbox
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                />
                <span>
                  I would like to be contacted with news and updates about your
                  events and services
                </span>
              </CheckboxLabel>
            </CheckboxWrapper>
          </InputGroup>
        
        </StyledForm>
        <SendMessageButton type="submit">
            Send Message
          </SendMessageButton>
      </FormWrapper>
    </FormContainer>
  );
};

export default ContactForm;