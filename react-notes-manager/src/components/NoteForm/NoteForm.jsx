import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { FieldError } from "components/FieldError/FieldError";
import { useState } from "react";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import { ValidatorService } from "services/validator";
import s from "./style.module.css";

const VALIDATION_RULES = {
    title: (value) => ValidatorService.min(value, 3) || ValidatorService.max(value, 10) ,
    content: (value) => ValidatorService.min(value, 3) || ValidatorService.max(value, 30)
}

export function NoteForm({
  isEditable = true,
  note,
  // title,
  onClickEdit,
  onClickDelete,
  onSubmit,
}) {

    const [isSubmit, setIsSubmit] = useState(false);

  const [formValues, setFormValues] = useState({
    title: "",
    content: "",
    });

  const [formErrors, setFormErrors] = useState({
    title: "",
    content: "",
    });

  const updateFormValues = (e) => {
      const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
      isSubmit && validate(name, value);
  }

  const hasError = () => {return Object.values(formErrors).some(errMsg => errMsg)}

    const validate = (name, value) => {
        const errorMessage = VALIDATION_RULES[name](value);
        setFormErrors({ ...formErrors, [name]: errorMessage });
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    if (!hasError()) {
          onSubmit(formValues);
      }
  }

  const actionIcons = (
    <>
      <div className="col-1">
      </div>
      <div className="col-1">
      </div>
    </>
  );

  const titleInput = (
    <div className="mb-5">
      <label className="form-label">Title</label>
      <input
        type="text"
        name="title"
        className="form-control"
        onChange={(e) => updateFormValues(e)}
      />
        <FieldError msg={formErrors?.title} />
    </div>
  );

  const contentInput = (
    <div className="mb-5">
      <label className="form-label">Content</label>
      <textarea
        type="text"
        name="content"
        className="form-control"
        onChange={(e) => updateFormValues(e)}
        row="5"
      />
        <FieldError msg={formErrors?.content} />
    </div>
  );

  const submitBtn = (
    <div className={s.submit_btn}>
      <ButtonPrimary
        onClick={handleSubmit}
      >
        Submit
      </ButtonPrimary>
    </div>
  );

  return (
    <div className={s.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3"></h2>
        </div>
      </div>
      <div className={`mb-3 ${s.title_input_container}`}>
            {titleInput}
      </div>
      <div className="mb-3">
          {contentInput}
      </div>
        {submitBtn}
    </div>
  );
}
