"use-client"
import React, { useState } from 'react'
import classes from './page.module.css'
import TutorModal from './tutorModal';

export default function ListCard() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleButtonClick = () => {
    setDialogOpen(true);
  };


  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-16 py-24 mx-auto">

          <div className="flex flex-wrap -m-6">
            <div className={`${classes.cardTutorContainer} w-full mb-16 relative`}>
              <div className="h-full flex items-center ">
                <div className="relative flex-shrink-0">
                  <img
                    alt="team"
                    className={`${classes.cardTutorImage} object-cover object-center`}
                    src="https://s3-alpha-sig.figma.com/img/6181/1ae8/89b0660d6dd91bdedba586139a98a0fe?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cpole3t8w0X8hD0gFj1jlfCH53VsmP8Jr5YSD0GT1N4Zj3QT7YPQThO3UtnCZtIJz00mgRApSBkQ83N43JiIRPU9B2tqs6b~pKRFjskljdfKcD-W1t8KOMWqstIRogHfC-3aEhEgT~vAdqU0AnruqX26Xdf8EMAOC22oJ3-qNqmwjlDis4EarC20MjQVzXszmnjAHFtI0n6WxW-IMCFFFqRo1vhDu~iW0OoQOnH5b7wT-IhT71oUgMjFP2b~tpf-QOA3F-R~~WBkEogi8~0FB5Imf5qGAjDsEUeqY9jI9lmCK6MIehsRjDfxEvdGSFM5U1bMdl5YroRoMDqMl7ps2A__"
                  />
                  <div className={`${classes.status} absolute bottom-0 left-0 w-full`}>Available</div>
                </div>

                <div className="mt-8 ml-6 grid grid-cols-1 gap-x-16 gap-y-5 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <h2 className={`${classes.tutorName} w-full`}>Adrian Bui</h2>
                  </div>
                  <div className="sm:col-span-3">
                    <button className={classes.cardTutorButton}  onClick={handleButtonClick}>See Details</button>
                  </div>

                  <TutorModal isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} />

                  <div className="sm:col-span-4 ">
                    <div className={classes.tutorMajorTag}>
                      <p className={classes.tutorMajorContent}>
                        Digital Marketing
                      </p>
                    </div>
                  </div>

                  <div className="sm:col-span-full flex mb-2">
                    <div>
                      <h2 className={`${classes.tutorRate} w-full`}>(5.00)</h2>
                    </div>
                    <div className="flex items-center ml-8">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                        <path d="M0 11.0837V14H2.70796L10.6946 5.39897L7.98667 2.48271L0 11.0837ZM12.7888 3.14373C13.0704 2.84044 13.0704 2.35051 12.7888 2.04722L11.099 0.227468C10.8174 -0.0758228 10.3624 -0.0758228 10.0808 0.227468L8.75934 1.6506L11.4673 4.56687L12.7888 3.14373Z" fill="black" />
                      </svg>
                      <p className={`${classes.tutorComment} ml-2`}>11 comments</p>
                    </div>
                  </div>

                  <div className="sm:col-span-full flex items-center">
                    <img alt="comment image" className={classes.commentImage} src="https://s3-alpha-sig.figma.com/img/fde4/e33d/48235612ffa00786d8e10c5047314136?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M6fP-UpHSOtuqfOCPdvxD9DT4ENftFw7oW6Tb4sgbNFvSs~y6Irj8OjhEWQVgSKZcZvAV00RLWedlrfjSbMTOmeu9j5wXfjLTw039MY7oSK-S1smf~vpU1kclQdataRH7qXqOr9MgBlMIwf55OgpGoPwiJtdVxwjYX8zSE~GHtsOxD9hfBvM-PzX53W51BYX0ZgfBs9XGlmymS4NytdVFzSLhwEggtaKM8Rsma1qHWFBMZLu4ITfQx3Ir2s3JTucntg-NG5XXY7a0a1ac1Ect~NPcMQFZuhI4bsZEoxb5nKnUSWZPHmMQzmv3VeizLBWKfHbdSSCv5Dzuj0P5kAYOQ__" />
                    <div className="ml-3">
                      <h3 className={classes.commentName}>Anh Tu</h3>
                      <p className={classes.commentDate}>December 20</p>
                    </div>
                    <div className="flex items-center ml-14">
                      <p className={`${classes.commentRatingTypography} mr-3`}>Rating</p>
                      <p className={classes.commentRating}>4.75</p>
                    </div>
                  </div>

                  <div className="sm:col-span-full mx-12">
                    <p className={classes.commentContent}>
                      The teacher teaches about color and agile behavior. Teachers have teaching experience, lectures are short and easy to understand, and instructions are provided.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${classes.cardTutorContainer} w-full mb-16 relative`}>
              <div className="h-full flex items-center ">
                <div className="relative flex-shrink-0">
                  <img
                    alt="team"
                    className={`${classes.cardTutorImage} object-cover object-center`}
                    src="https://s3-alpha-sig.figma.com/img/6181/1ae8/89b0660d6dd91bdedba586139a98a0fe?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cpole3t8w0X8hD0gFj1jlfCH53VsmP8Jr5YSD0GT1N4Zj3QT7YPQThO3UtnCZtIJz00mgRApSBkQ83N43JiIRPU9B2tqs6b~pKRFjskljdfKcD-W1t8KOMWqstIRogHfC-3aEhEgT~vAdqU0AnruqX26Xdf8EMAOC22oJ3-qNqmwjlDis4EarC20MjQVzXszmnjAHFtI0n6WxW-IMCFFFqRo1vhDu~iW0OoQOnH5b7wT-IhT71oUgMjFP2b~tpf-QOA3F-R~~WBkEogi8~0FB5Imf5qGAjDsEUeqY9jI9lmCK6MIehsRjDfxEvdGSFM5U1bMdl5YroRoMDqMl7ps2A__"
                  />
                  <div className={`${classes.status} absolute bottom-0 left-0 w-full`}>Available</div>
                </div>

                <div className="mt-8  ml-6 grid grid-cols-1 gap-x-16 gap-y-5 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <h2 className={`${classes.tutorName} w-full`}>Adrian Bui</h2>
                  </div>
                  <div className="sm:col-span-3">
                    <button className={classes.cardTutorButton} onClick={handleButtonClick}>See Details</button>
                  </div>
                  <TutorModal isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} />

                  <div className="sm:col-span-4 ">
                    <div className={classes.tutorMajorTag}>
                      <p className={classes.tutorMajorContent}>
                        Digital Marketing
                      </p>
                    </div>
                  </div>

                  <div className="sm:col-span-full flex mb-2">
                    <div>
                      <h2 className={`${classes.tutorRate} w-full`}>(5.00)</h2>
                    </div>
                    <div className="flex items-center ml-8">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                        <path d="M0 11.0837V14H2.70796L10.6946 5.39897L7.98667 2.48271L0 11.0837ZM12.7888 3.14373C13.0704 2.84044 13.0704 2.35051 12.7888 2.04722L11.099 0.227468C10.8174 -0.0758228 10.3624 -0.0758228 10.0808 0.227468L8.75934 1.6506L11.4673 4.56687L12.7888 3.14373Z" fill="black" />
                      </svg>
                      <p className={`${classes.tutorComment} ml-2`}>11 comments</p>
                    </div>
                  </div>

                  <div className="sm:col-span-full flex items-center">
                    <img alt="comment image" className={classes.commentImage} src="https://s3-alpha-sig.figma.com/img/fde4/e33d/48235612ffa00786d8e10c5047314136?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M6fP-UpHSOtuqfOCPdvxD9DT4ENftFw7oW6Tb4sgbNFvSs~y6Irj8OjhEWQVgSKZcZvAV00RLWedlrfjSbMTOmeu9j5wXfjLTw039MY7oSK-S1smf~vpU1kclQdataRH7qXqOr9MgBlMIwf55OgpGoPwiJtdVxwjYX8zSE~GHtsOxD9hfBvM-PzX53W51BYX0ZgfBs9XGlmymS4NytdVFzSLhwEggtaKM8Rsma1qHWFBMZLu4ITfQx3Ir2s3JTucntg-NG5XXY7a0a1ac1Ect~NPcMQFZuhI4bsZEoxb5nKnUSWZPHmMQzmv3VeizLBWKfHbdSSCv5Dzuj0P5kAYOQ__" />
                    <div className="ml-3">
                      <h3 className={classes.commentName}>Anh Tu</h3>
                      <p className={classes.commentDate}>December 20</p>
                    </div>
                    <div className="flex items-center ml-14">
                      <p className={`${classes.commentRatingTypography} mr-3`}>Rating</p>
                      <p className={classes.commentRating}>4.75</p>
                    </div>
                  </div>

                  <div className="sm:col-span-full mx-12">
                    <p className={classes.commentContent}>
                      The teacher teaches about color and agile behavior. Teachers have teaching experience, lectures are short and easy to understand, and instructions are provided.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${classes.cardTutorContainer} w-full mb-16 relative`}>
              <div className="h-full flex items-center ">
                <div className="relative flex-shrink-0">
                  <img
                    alt="team"
                    className={`${classes.cardTutorImage} object-cover object-center`}
                    src="https://s3-alpha-sig.figma.com/img/6181/1ae8/89b0660d6dd91bdedba586139a98a0fe?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cpole3t8w0X8hD0gFj1jlfCH53VsmP8Jr5YSD0GT1N4Zj3QT7YPQThO3UtnCZtIJz00mgRApSBkQ83N43JiIRPU9B2tqs6b~pKRFjskljdfKcD-W1t8KOMWqstIRogHfC-3aEhEgT~vAdqU0AnruqX26Xdf8EMAOC22oJ3-qNqmwjlDis4EarC20MjQVzXszmnjAHFtI0n6WxW-IMCFFFqRo1vhDu~iW0OoQOnH5b7wT-IhT71oUgMjFP2b~tpf-QOA3F-R~~WBkEogi8~0FB5Imf5qGAjDsEUeqY9jI9lmCK6MIehsRjDfxEvdGSFM5U1bMdl5YroRoMDqMl7ps2A__"
                  />
                  <div className={`${classes.status} absolute bottom-0 left-0 w-full`}>Available</div>
                </div>

                <div className="mt-8  ml-6 grid grid-cols-1 gap-x-16 gap-y-5 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <h2 className={`${classes.tutorName} w-full`}>Adrian Bui</h2>
                  </div>
                  <div className="sm:col-span-3">
                    <button className={classes.cardTutorButton} onClick={handleButtonClick}>See Details</button>
                  </div>

                  <TutorModal isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} />

                  <div className="sm:col-span-4 ">
                    <div className={classes.tutorMajorTag}>
                      <p className={classes.tutorMajorContent}>
                        Digital Marketing
                      </p>
                    </div>
                  </div>

                  <div className="sm:col-span-full flex mb-2">
                    <div>
                      <h2 className={`${classes.tutorRate} w-full`}>(5.00)</h2>
                    </div>
                    <div className="flex items-center ml-8">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                        <path d="M0 11.0837V14H2.70796L10.6946 5.39897L7.98667 2.48271L0 11.0837ZM12.7888 3.14373C13.0704 2.84044 13.0704 2.35051 12.7888 2.04722L11.099 0.227468C10.8174 -0.0758228 10.3624 -0.0758228 10.0808 0.227468L8.75934 1.6506L11.4673 4.56687L12.7888 3.14373Z" fill="black" />
                      </svg>
                      <p className={`${classes.tutorComment} ml-2`}>11 comments</p>
                    </div>
                  </div>

                  <div className="sm:col-span-full flex items-center">
                    <img alt="comment image" className={classes.commentImage} src="https://s3-alpha-sig.figma.com/img/fde4/e33d/48235612ffa00786d8e10c5047314136?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M6fP-UpHSOtuqfOCPdvxD9DT4ENftFw7oW6Tb4sgbNFvSs~y6Irj8OjhEWQVgSKZcZvAV00RLWedlrfjSbMTOmeu9j5wXfjLTw039MY7oSK-S1smf~vpU1kclQdataRH7qXqOr9MgBlMIwf55OgpGoPwiJtdVxwjYX8zSE~GHtsOxD9hfBvM-PzX53W51BYX0ZgfBs9XGlmymS4NytdVFzSLhwEggtaKM8Rsma1qHWFBMZLu4ITfQx3Ir2s3JTucntg-NG5XXY7a0a1ac1Ect~NPcMQFZuhI4bsZEoxb5nKnUSWZPHmMQzmv3VeizLBWKfHbdSSCv5Dzuj0P5kAYOQ__" />
                    <div className="ml-3">
                      <h3 className={classes.commentName}>Anh Tu</h3>
                      <p className={classes.commentDate}>December 20</p>
                    </div>
                    <div className="flex items-center ml-14">
                      <p className={`${classes.commentRatingTypography} mr-3`}>Rating</p>
                      <p className={classes.commentRating}>4.75</p>
                    </div>
                  </div>

                  <div className="sm:col-span-full mx-12">
                    <p className={classes.commentContent}>
                      The teacher teaches about color and agile behavior. Teachers have teaching experience, lectures are short and easy to understand, and instructions are provided.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${classes.cardTutorContainer} w-full mb-16 relative`}>
              <div className="h-full flex items-center ">
                <div className="relative flex-shrink-0">
                  <img
                    alt="team"
                    className={`${classes.cardTutorImage} object-cover object-center`}
                    src="https://s3-alpha-sig.figma.com/img/6181/1ae8/89b0660d6dd91bdedba586139a98a0fe?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cpole3t8w0X8hD0gFj1jlfCH53VsmP8Jr5YSD0GT1N4Zj3QT7YPQThO3UtnCZtIJz00mgRApSBkQ83N43JiIRPU9B2tqs6b~pKRFjskljdfKcD-W1t8KOMWqstIRogHfC-3aEhEgT~vAdqU0AnruqX26Xdf8EMAOC22oJ3-qNqmwjlDis4EarC20MjQVzXszmnjAHFtI0n6WxW-IMCFFFqRo1vhDu~iW0OoQOnH5b7wT-IhT71oUgMjFP2b~tpf-QOA3F-R~~WBkEogi8~0FB5Imf5qGAjDsEUeqY9jI9lmCK6MIehsRjDfxEvdGSFM5U1bMdl5YroRoMDqMl7ps2A__"
                  />
                  <div className={`${classes.status} absolute bottom-0 left-0 w-full`}>Available</div>
                </div>

                <div className="mt-8  ml-6 grid grid-cols-1 gap-x-16 gap-y-5 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <h2 className={`${classes.tutorName} w-full`}>Adrian Bui</h2>
                  </div>
                  <div className="sm:col-span-3">
                    <button className={classes.cardTutorButton} onClick={handleButtonClick}>See Details</button>
                  </div>

                  <TutorModal isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} />

                  <div className="sm:col-span-4 ">
                    <div className={classes.tutorMajorTag}>
                      <p className={classes.tutorMajorContent}>
                        Digital Marketing
                      </p>
                    </div>
                  </div>

                  <div className="sm:col-span-full flex mb-2">
                    <div>
                      <h2 className={`${classes.tutorRate} w-full`}>(5.00)</h2>
                    </div>
                    <div className="flex items-center ml-8">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                        <path d="M0 11.0837V14H2.70796L10.6946 5.39897L7.98667 2.48271L0 11.0837ZM12.7888 3.14373C13.0704 2.84044 13.0704 2.35051 12.7888 2.04722L11.099 0.227468C10.8174 -0.0758228 10.3624 -0.0758228 10.0808 0.227468L8.75934 1.6506L11.4673 4.56687L12.7888 3.14373Z" fill="black" />
                      </svg>
                      <p className={`${classes.tutorComment} ml-2`}>11 comments</p>
                    </div>
                  </div>

                  <div className="sm:col-span-full flex items-center">
                    <img alt="comment image" className={classes.commentImage} src="https://s3-alpha-sig.figma.com/img/fde4/e33d/48235612ffa00786d8e10c5047314136?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M6fP-UpHSOtuqfOCPdvxD9DT4ENftFw7oW6Tb4sgbNFvSs~y6Irj8OjhEWQVgSKZcZvAV00RLWedlrfjSbMTOmeu9j5wXfjLTw039MY7oSK-S1smf~vpU1kclQdataRH7qXqOr9MgBlMIwf55OgpGoPwiJtdVxwjYX8zSE~GHtsOxD9hfBvM-PzX53W51BYX0ZgfBs9XGlmymS4NytdVFzSLhwEggtaKM8Rsma1qHWFBMZLu4ITfQx3Ir2s3JTucntg-NG5XXY7a0a1ac1Ect~NPcMQFZuhI4bsZEoxb5nKnUSWZPHmMQzmv3VeizLBWKfHbdSSCv5Dzuj0P5kAYOQ__" />
                    <div className="ml-3">
                      <h3 className={classes.commentName}>Anh Tu</h3>
                      <p className={classes.commentDate}>December 20</p>
                    </div>
                    <div className="flex items-center ml-14">
                      <p className={`${classes.commentRatingTypography} mr-3`}>Rating</p>
                      <p className={classes.commentRating}>4.75</p>
                    </div>
                  </div>

                  <div className="sm:col-span-full mx-12">
                    <p className={classes.commentContent}>
                      The teacher teaches about color and agile behavior. Teachers have teaching experience, lectures are short and easy to understand, and instructions are provided.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${classes.cardTutorContainer} w-full mb-16 relative`}>
              <div className="h-full flex items-center ">
                <div className="relative flex-shrink-0">
                  <img
                    alt="team"
                    className={`${classes.cardTutorImage} object-cover object-center`}
                    src="https://s3-alpha-sig.figma.com/img/6181/1ae8/89b0660d6dd91bdedba586139a98a0fe?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cpole3t8w0X8hD0gFj1jlfCH53VsmP8Jr5YSD0GT1N4Zj3QT7YPQThO3UtnCZtIJz00mgRApSBkQ83N43JiIRPU9B2tqs6b~pKRFjskljdfKcD-W1t8KOMWqstIRogHfC-3aEhEgT~vAdqU0AnruqX26Xdf8EMAOC22oJ3-qNqmwjlDis4EarC20MjQVzXszmnjAHFtI0n6WxW-IMCFFFqRo1vhDu~iW0OoQOnH5b7wT-IhT71oUgMjFP2b~tpf-QOA3F-R~~WBkEogi8~0FB5Imf5qGAjDsEUeqY9jI9lmCK6MIehsRjDfxEvdGSFM5U1bMdl5YroRoMDqMl7ps2A__"
                  />
                  <div className={`${classes.status} absolute bottom-0 left-0 w-full`}>Available</div>
                </div>

                <div className="mt-8  ml-6 grid grid-cols-1 gap-x-16 gap-y-5 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <h2 className={`${classes.tutorName} w-full`}>Adrian Bui</h2>
                  </div>
                  <div className="sm:col-span-3">
                    <button className={classes.cardTutorButton} onClick={handleButtonClick}>See Details</button>
                  </div>

                  <TutorModal isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} />
      
                  <div className="sm:col-span-4 ">
                    <div className={classes.tutorMajorTag}>
                      <p className={classes.tutorMajorContent}>
                        Digital Marketing
                      </p>
                    </div>
                  </div>

                  <div className="sm:col-span-full flex mb-2">
                    <div>
                      <h2 className={`${classes.tutorRate} w-full`}>(5.00)</h2>
                    </div>
                    <div className="flex items-center ml-8">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                        <path d="M0 11.0837V14H2.70796L10.6946 5.39897L7.98667 2.48271L0 11.0837ZM12.7888 3.14373C13.0704 2.84044 13.0704 2.35051 12.7888 2.04722L11.099 0.227468C10.8174 -0.0758228 10.3624 -0.0758228 10.0808 0.227468L8.75934 1.6506L11.4673 4.56687L12.7888 3.14373Z" fill="black" />
                      </svg>
                      <p className={`${classes.tutorComment} ml-2`}>11 comments</p>
                    </div>
                  </div>

                  <div className="sm:col-span-full flex items-center">
                    <img alt="comment image" className={classes.commentImage} src="https://s3-alpha-sig.figma.com/img/fde4/e33d/48235612ffa00786d8e10c5047314136?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M6fP-UpHSOtuqfOCPdvxD9DT4ENftFw7oW6Tb4sgbNFvSs~y6Irj8OjhEWQVgSKZcZvAV00RLWedlrfjSbMTOmeu9j5wXfjLTw039MY7oSK-S1smf~vpU1kclQdataRH7qXqOr9MgBlMIwf55OgpGoPwiJtdVxwjYX8zSE~GHtsOxD9hfBvM-PzX53W51BYX0ZgfBs9XGlmymS4NytdVFzSLhwEggtaKM8Rsma1qHWFBMZLu4ITfQx3Ir2s3JTucntg-NG5XXY7a0a1ac1Ect~NPcMQFZuhI4bsZEoxb5nKnUSWZPHmMQzmv3VeizLBWKfHbdSSCv5Dzuj0P5kAYOQ__" />
                    <div className="ml-3">
                      <h3 className={classes.commentName}>Anh Tu</h3>
                      <p className={classes.commentDate}>December 20</p>
                    </div>
                    <div className="flex items-center ml-14">
                      <p className={`${classes.commentRatingTypography} mr-3`}>Rating</p>
                      <p className={classes.commentRating}>4.75</p>
                    </div>
                  </div>

                  <div className="sm:col-span-full mx-12">
                    <p className={classes.commentContent}>
                      The teacher teaches about color and agile behavior. Teachers have teaching experience, lectures are short and easy to understand, and instructions are provided.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${classes.cardTutorContainer} w-full mb-16 relative`}>
              <div className="h-full flex items-center ">
                <div className="relative flex-shrink-0">
                  <img
                    alt="team"
                    className={`${classes.cardTutorImage} object-cover object-center`}
                    src="https://s3-alpha-sig.figma.com/img/6181/1ae8/89b0660d6dd91bdedba586139a98a0fe?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cpole3t8w0X8hD0gFj1jlfCH53VsmP8Jr5YSD0GT1N4Zj3QT7YPQThO3UtnCZtIJz00mgRApSBkQ83N43JiIRPU9B2tqs6b~pKRFjskljdfKcD-W1t8KOMWqstIRogHfC-3aEhEgT~vAdqU0AnruqX26Xdf8EMAOC22oJ3-qNqmwjlDis4EarC20MjQVzXszmnjAHFtI0n6WxW-IMCFFFqRo1vhDu~iW0OoQOnH5b7wT-IhT71oUgMjFP2b~tpf-QOA3F-R~~WBkEogi8~0FB5Imf5qGAjDsEUeqY9jI9lmCK6MIehsRjDfxEvdGSFM5U1bMdl5YroRoMDqMl7ps2A__"
                  />
                  <div className={`${classes.status} absolute bottom-0 left-0 w-full`}>Available</div>
                </div>

                <div className="mt-8  ml-6 grid grid-cols-1 gap-x-16 gap-y-5 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <h2 className={`${classes.tutorName} w-full`}>Adrian Bui</h2>
                  </div>
                  <div className="sm:col-span-3">
                    <button className={classes.cardTutorButton} onClick={handleButtonClick}>See Details</button>
                  </div>

                  <TutorModal isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} />

                  <div className="sm:col-span-4 ">
                    <div className={classes.tutorMajorTag}>
                      <p className={classes.tutorMajorContent}>
                        Digital Marketing
                      </p>
                    </div>
                  </div>

                  <div className="sm:col-span-full flex mb-2">
                    <div>
                      <h2 className={`${classes.tutorRate} w-full`}>(5.00)</h2>
                    </div>
                    <div className="flex items-center ml-8">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                        <path d="M0 11.0837V14H2.70796L10.6946 5.39897L7.98667 2.48271L0 11.0837ZM12.7888 3.14373C13.0704 2.84044 13.0704 2.35051 12.7888 2.04722L11.099 0.227468C10.8174 -0.0758228 10.3624 -0.0758228 10.0808 0.227468L8.75934 1.6506L11.4673 4.56687L12.7888 3.14373Z" fill="black" />
                      </svg>
                      <p className={`${classes.tutorComment} ml-2`}>11 comments</p>
                    </div>
                  </div>

                  <div className="sm:col-span-full flex items-center">
                    <img alt="comment image" className={classes.commentImage} src="https://s3-alpha-sig.figma.com/img/fde4/e33d/48235612ffa00786d8e10c5047314136?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M6fP-UpHSOtuqfOCPdvxD9DT4ENftFw7oW6Tb4sgbNFvSs~y6Irj8OjhEWQVgSKZcZvAV00RLWedlrfjSbMTOmeu9j5wXfjLTw039MY7oSK-S1smf~vpU1kclQdataRH7qXqOr9MgBlMIwf55OgpGoPwiJtdVxwjYX8zSE~GHtsOxD9hfBvM-PzX53W51BYX0ZgfBs9XGlmymS4NytdVFzSLhwEggtaKM8Rsma1qHWFBMZLu4ITfQx3Ir2s3JTucntg-NG5XXY7a0a1ac1Ect~NPcMQFZuhI4bsZEoxb5nKnUSWZPHmMQzmv3VeizLBWKfHbdSSCv5Dzuj0P5kAYOQ__" />
                    <div className="ml-3">
                      <h3 className={classes.commentName}>Anh Tu</h3>
                      <p className={classes.commentDate}>December 20</p>
                    </div>
                    <div className="flex items-center ml-14">
                      <p className={`${classes.commentRatingTypography} mr-3`}>Rating</p>
                      <p className={classes.commentRating}>4.75</p>
                    </div>
                  </div>

                  <div className="sm:col-span-full mx-12">
                    <p className={classes.commentContent}>
                      The teacher teaches about color and agile behavior. Teachers have teaching experience, lectures are short and easy to understand, and instructions are provided.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
