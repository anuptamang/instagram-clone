import { Box, Typography } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import ImageIcon from '@material-ui/icons/Image';
import TheatersRoundedIcon from '@material-ui/icons/TheatersRounded';
import Emoji from 'components/_common/Emoji';
import LoaderIcon from 'components/_common/LoaderIcon';
import VideoBlock from 'components/_common/VideoBlock';
import { DB } from 'context/UserContext';
import db, { storage } from 'fb/firebase';
import firebase from 'firebase';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import PreviewLoading from './PreviewLoading';

function LinearProgressWithLabel(props) {
    return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const UserPostPanel = () => {
  const [caption, setCaption] = useState('')
  const [mediaObj, setMediaObj] = useState(null)
  const [progress, setProgress] = useState('')
  const [uploading, setUploading] = useState(false)
  const [previewUploading, setPreviewUploading] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewVideo, setPreviewVideo] = useState('')
  const [previewVideoCover, setPreviewVideoCover] = useState(null)

  const user = DB().user

  const handleChange = (e) => {
    const media = e.target.files
    // console.log(media)
    const mediaArr = Object.keys(media)
      .map(function (data) {
        return [data, media[data]]
      })
      .map((file) => {
        return file[1]
      })

    if(media) {
      setMediaObj(mediaArr)

      mediaArr.forEach((file) => {
        const uploadTask = storage.ref(`images/${file.name}`).put(file)
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            // progress function..
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            )
            setPreviewUploading(true)
            setProgress(progress)
          },
          (error) => {
            // error function
            console.log(error)
          },
          () => {
            // complete function
            if (
              file.type ===
              ('video/mp4' || 'video/webm' || 'video/mkv' || 'video/ogg')
            ) {
              storage
                .ref('videos')
                .child(file.name)
                .getDownloadURL()
                .then((videoUrl) => {
                  setPreviewVideo(videoUrl)
                  setPreviewUploading(false)
                })
            } else {
              storage
                .ref('images')
                .child(file.name)
                .getDownloadURL()
                .then((imgUrl) => {
                  setPreviewImage([imgUrl])
                  setPreviewUploading(false)
                })
            }
          }
        )
      })
    }
  }

  const handleUpload = () => {
    mediaObj.forEach((file) => {
      const uploadTask = storage.ref(`images/${file.name}`).put(file)
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // progress function..
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          )
          setUploading(true)
          setProgress(progress)
        },
        (error) => {
          // error function
          console.log(error)
        },
        ()=> {
          // complete function
          if (
            file.type ===
            ('video/mp4' || 'video/webm' || 'video/mkv' || 'video/ogg')
          ) {
            storage
              .ref('videos')
              .child(file.name)
              .getDownloadURL()
              .then((videoUrl) => {
                // post image inside db
                
                db.collection('posts').add({
                  posted: firebase.firestore.Timestamp.now(),
                  postCaption: caption,
                  postImage: null,
                  username: user.username ? user.username : '',
                  // postId: uuidv4(),
                  userId: user.userId,
                  location: '',
                  postVideo: videoUrl,
                  postVideoCover: null,
                  postLikes: 0,
                })
                setUploading(false)
                setPreviewVideo(null)
                // setProgress(0)
                setCaption('')
                setMediaObj(null)
              })
          } else {
            storage
              .ref('images')
              .child(file.name)
              .getDownloadURL()
              .then((imgUrl) => {
                // post image inside db
                db.collection('posts').add({
                  posted: firebase.firestore.Timestamp.now(),
                  postCaption: caption,
                  postImage: [imgUrl],
                  username: user.username ? user.username : '',
                  // postId: uuidv4(),
                  userId: user.userId,
                  location: '',
                  postVideo: null,
                  postVideoCover: null,
                  postLikes: 0,
                })
                setUploading(false)
                setPreviewImage(null)
                // setProgress(0)
                setCaption('')
                setMediaObj(null)
              })
          }        
        }
      )
    })
  }  

  return (
    <div>
      <div className="bg-white mb-4 rounded-xl">
        <div className="input-pane relative">
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="block w-full rounded-md border-0 focus:ring-0 resize-none pr-10"
            type="text"
            placeholder={`What's on your mind, ${user.name.split(' ')[0]} ?`}
            cols="30"
            rows="2"
          />
          <div className="emoji-holder absolute right-3 bottom-1 z-20">
            <Emoji
              input={caption}
              setInput={setCaption}
              emojiPosition={`top-full -right-3`}
            />
          </div>
        </div>
        <div className="mb-4 px-3">
          {previewUploading ? (
            <PreviewLoading />
            ) : (
              <>
             
              {
                previewImage && previewImage.map(imageUrl => (
                  <img src={imageUrl} alt="" />
                ))
              }
              {previewVideo && (
                <div className="video-holder overflow-hidden relative h-72 w-full">
                  <VideoBlock
                    postVideoUrl={previewVideo}
                    // postVideoCover={article.post.postVideoCover}
                    // animVideoCover={animVideoCover}
                  />
                </div>
              )}
            </>
          )}
        </div>
        <div className="input-file border-t border-gray-200 px-3 pt-2 pb-1">
          <label
            className="inline-flex items-center text-xs text-gray-600 font-bold cursor-pointer"
            onChange={handleChange}
          >
            <span className="icon flex">
              <ImageIcon className="fill-current text-pink-600" />
              <TheatersRoundedIcon className="fill-current text-pink-600" />
            </span>
            <input className="hidden" multiple type="file" />
            Photo/Video
          </label>
        </div>
      </div>
      <div className="mb-4">
        {uploading && <LinearProgressWithLabel value={progress} />}
        <button
          onClick={handleUpload}
          disabled={!caption || !mediaObj}
          className={`focus:outline-none block w-full bg-pink-500 text-white px-8 py-3 rounded-lg border-0 focus:border-opacity-0 focus:ring-0 transition-opacity hover:opacity-90 relative ${
            uploading && 'h-12'
          }`}
        >
          {uploading ? <LoaderIcon /> : 'Post'}
        </button>
      </div>
    </div>
  )
}

export default UserPostPanel
