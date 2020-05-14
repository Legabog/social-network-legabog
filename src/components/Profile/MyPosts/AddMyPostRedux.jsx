import React from "react"
import { Field, reduxForm } from "redux-form";
import classes from "./MyPosts.module.css";
import {
  requiredField,
  maxLength100,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import Emoji from "../../common/EmojiList/EmojiList";


const AddMyPostForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div className={classes.field} style={{fontSize: "1.5rem"}}>
          <Field
            style={{
              borderRadius:"10px",
              width:"320px",
              
            }}
            name={"addMyPostForm"}
            component={Textarea}
            validate={[requiredField, maxLength100]}
            placeholder={"Post new message"}
          />
        </div>
        <i className="far fa-smile" style={{fontSize:"2rem"}}></i>
        <Emoji {...props}/>
        <button onClick={() => props.value += 1 } >Emoji</button>
        <div className={classes.addButton}>
          <button
            className="btn btn-primary btn-sm"
            style={{
              width: "320px",
              height: "40px",
              fontSize: "160%",
              marginTop: "20px",
            }}
          >Post message</button>
        </div>
      </form>
    );
  };
  
export const AddMyPostFormRedux = reduxForm({ form: "addMyPostForm" })(AddMyPostForm);