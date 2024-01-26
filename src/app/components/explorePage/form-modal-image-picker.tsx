import React from 'react'
import classes from './form-modal-image-picker.module.css'
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
export default function FormModalImagePicker() {
    const [pickedImage, setPickedImage] = React.useState(null)
    const imagePicker = React.useRef<HTMLInputElement>()
    console.log('src: ', pickedImage)
    const handlePickClick = () => {
        if (imagePicker.current) {
            imagePicker.current.click()
        }

    }
    const handleImageChange = event => {
        const file = event.target.files[0]
        if (!file) {
            setPickedImage(null)
            return
        }
        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }

    const handleImageRemove = () => {
        setPickedImage(s => null)
    }
    return (
        <>
            {
                pickedImage &&
                <div className='relative'>
                    <img src={pickedImage}
                        className={classes.picked_image} alt='Image selected by user' />
                    <CloseOutlinedIcon
                        onClick={handleImageRemove}
                        className='absolute top-0 right-0 cursor-pointer'
                    />
                </div>
            }

            <div className={classes.post_action}>
                <span className={classes.placeholder}>Add image to your post </span>
                <input
                    className={classes.input}
                    ref={imagePicker}
                    type='file'
                    accept='image/png, image/jpeg'
                    onChange={handleImageChange}
                    required
                />

                <PermMediaOutlinedIcon
                    onClick={handlePickClick}
                    className={classes.upload_icon} sx={{ color: '#00ff14' }} />
            </div>
        </>
    )
}
