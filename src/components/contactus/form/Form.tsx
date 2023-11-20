import { Box } from '@mui/material';
import PrimaryBtn from '../../shared/PrimaryBtn';
import theme from '../../../theme/theme';
import TextField from '../../shared/TextField';

const Form = () => {
  return (
    <form style={{display:'flex', flexDirection:'column', width:'100%', alignItems:'center'}}>
          <TextField placeholder='Name' required/>
          <TextField placeholder='Email' required/>
          <TextField placeholder='Subject' required/>
          <textarea placeholder='Message' rows={5} required
          style={{
            padding:"1rem",
            boxSizing:'border-box',
            width:"100%",
            borderRadius: '10px',
            outline: 'none',
            border:'none',
            marginBottom:'10px',
            fontFamily: 'Roboto',
            resize: 'none',
            fontSize:theme.body_font
          }}
          />
          {/* <TextField required id="name" label="name" variant="outlined" color="secondary" sx={{marginBottom:'10px', width:'100%', fontSize:theme.body_font}}/>
          <TextField required id="email" label="email" variant="outlined" color="secondary" sx={{marginBottom:'10px', width:'100%', fontSize:theme.body_font}}/>
          <TextField required id="subject" label="subject" variant="outlined" color="secondary" sx={{marginBottom:'10px', width:'100%', fontSize:theme.body_font}}/>
          <TextField required id="message" label="message" variant="outlined" color="secondary" multiline rows={4} sx={{marginBottom:'10px', width:'100%', fontSize:theme.body_font}}/> */}
          <PrimaryBtn content='Submit' type='submit'/>
    </form>
  )
}

export default Form