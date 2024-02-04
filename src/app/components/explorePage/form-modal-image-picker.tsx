import React from 'react'
import classes from './form-modal-image-picker.module.css'
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
export default function FormModalImagePicker({ fileImage }: { fileImage: any }) {
    const [pickedImage, setPickedImage] = React.useState<string>('')


    const handlePickClick = () => {
        if (fileImage.current) {
            fileImage.current.click()
        }

    }
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (!event.target.files) {
            return ""
        }
        const file = event.target.files[0]
        if (!file) {
            setPickedImage('')
            return
        }
        const fileReader = new FileReader()

        fileReader.onload = () => {
            if (!fileReader.result) {
                return
            }
            setPickedImage(fileReader.result.toString())
        }


        fileReader.readAsDataURL(file)
    }

    const handleImageRemove = () => {
        fileImage.current.value = ""
        setPickedImage('')
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
                        className={classes.removeImage}
                    />
                </div>
            }

            <div className={classes.post_action}>
                <span className={classes.placeholder}>Add image to your post </span>
                <input
                    className={classes.input}
                    ref={fileImage}
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
