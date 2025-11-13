import React from "react";
import { useState } from "react";
import { use } from "react";
import { DataContext } from "../../../Context/DataContext";
import { AuthorDTO } from "../../../Classes/exports";
import { Link, Navigate, useNavigate } from "react-router";
import FormInput from "../../../Components/FormInput";
import ErrorInput from "../../../Components/ErrorInput";
import { BiLeftArrowAlt } from "react-icons/bi";

let startingAuthorData = { firstName: "", lastName: "" };

let errorMessage = {
    missingFirstName: "You must provide author first name!",
    missingLastName: "You must provide author last name!",
};
const navigate = useNavigate;

const AuthorForm = () => {
    const [authorData, setAuthorData] = useState(startingAuthorData);
    const [hasErrors, setHasErrors] = useState(false);
    const [confirmMessage, setConfirmMessage] = useState("");
    const { fetchAuthors } = use(DataContext);

    const saveAuthor = async (newAuthorDTO) => {
        try {
            const response = await fetch(
                "http://localhost:8080/api/authors/add",
                {
                    method: "POST",
                    body: JSON.stringify(newAuthorDTO),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.message || `Error - Status ${response.status}`
                );
            } else {
                fetchAuthors(); //this will update the list before returning it
                navigate("/admin/authors"); //navigating to the admin/authors using react router
            }
        } catch (error) {
        } finally {
            //put something here like a confirmation or something
        }
    };

    const handleChange = (e) => {
        //updating the state when admin user types in the input fields
        let updatedAuthorList = {
            ...authorData,
            [e.target.id]: e.target.value,
        };
        setAuthorData(updatedAuthorList);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //since I am using React, I do not want the page to reload
        const authorDTO = new AuthorDTO(
            authorData.firstName,
            authorData.lastName
        );
        if (!authorDTO.isValid()) {
            //using validation to make sure that the form is completed
            setHasErrors(true);
        } else {
            saveAuthor(authorDTO);
            setConfirmMessage(true);

            setTimeout(() => {
                setConfirmMessage("");
            }, 1000);
        }
    };

    return (
        <main>
            <div className="flex items-center ">
                <Link to="/admin/authors">
                    <span>
                        <BiLeftArrowAlt className="size-7" />
                    </span>
                </Link>
                <span className="font-bold">Back to author list</span>
            </div>
            <h1 className="flex justify-center mt-4 text-xl font-bold">
                Add New Author
            </h1>
            <form className="max-w-md mx-auto py-3 px-1">
                <div>
                    <FormInput //calling the FormInput.jsx to make sure that the code remains DRY
                        id="firstName"
                        label="First Name"
                        value={authorData.firstName}
                        handleChange={handleChange}
                    />
                    <ErrorInput
                        hasError={hasErrors && authorData.firstName === ""} //if there are errors or if the string is empty
                        message={errorMessage["missingFirstName"]} //calling the error message
                    />
                </div>
                <div>
                    <FormInput
                        id="lastName"
                        label="Last Name"
                        value={authorData.lastName}
                        handleChange={handleChange}
                    />
                    <ErrorInput
                        hasError={hasErrors && authorData.lastName === ""} //if there are errors or if the string is empty
                        message={errorMessage["missingLastName"]} //calling the error message
                    />
                </div>
                <div className="flex justify-center mt-4">
                    <button
                        type="submit"
                        className="bookSubmit"
                        onClick={handleSubmit}
                    >
                        Add Author
                    </button>{" "}
                    {/* When users click on the submit - it is sending to the /api/authors/add */}
                </div>
            </form>
            {confirmMessage && <p>Author submitted!</p>}
        </main>
    );
};

export default AuthorForm;