import InputField from "./InputComponent";
import styles from "./ResumeLayout.module.css"

function ResumeLayout() {
    return (
        <div className={styles.container}>
            <div className={styles.basicInfoGrid}>
                <InputField label='First Name' id='first-name-input' value='' placeholder='Joe' size="small"></InputField>
                <InputField label='Last Name' id='last-name-input' value='' placeholder='Vandal' size="small"></InputField>
                <InputField label='Email' id='email-input' value='' placeholder='Joe.Vandal@uidaho.edu' size="small"></InputField>
                <InputField label='Phone' id='phone-input' value='' placeholder='555-555-5555' size="small"></InputField>
            </div>
            <div className={styles.projectsGrid}>
                <InputField label='Project 1' id='one' value='' placeholder='First project description' size="large"></InputField>
                <InputField label='Project 2' id='two' value='' placeholder='Second project description' size="large"></InputField>
                <InputField label='Project 3' id='three' value='' placeholder='Second project description' size="large"></InputField>
                <InputField label='Project 4' id='four' value='' placeholder='Second project description' size="large"></InputField>
            </div>
        </div>
    )
}

export default ResumeLayout