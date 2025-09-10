import React, { useState } from 'react'
import axios from 'axios'
import '../../styles/create-food.css'
import {useNavigate} from 'react-router-dom'

const CreateFood = () => {
  const [formInfo, setFormInfo] = useState({
    video: null,
    name: '',
    description: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  // const [videoFile, setVideoFile] = useState(null)

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value, files } = e.target
    
    if (name === 'video') {
      setFormInfo(prev => ({
        ...prev,
        [name]: files[0] || null
      }))
    } else {
      setFormInfo(prev => ({
        ...prev,
        [name]: value
      }))
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formInfo.video) {
      newErrors.video = 'Please select a video file'
    }
    
    if (!formInfo.name.trim()) {
      newErrors.name = 'Food name is required'
    } else if (formInfo.name.trim().length < 2) {
      newErrors.name = 'Food name must be at least 2 characters'
    }
    
    if (!formInfo.description.trim()) {
      newErrors.description = 'Description is required'
    } else if (formInfo.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Here you would typically send the data to your backend
      console.log('Form data:', formInfo)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Reset form after successful submission
      setFormInfo({
        video: null,
        name: '',
        description: ''
      })
      
      alert('Food created successfully!')
    } catch (error) {
      console.error('Error creating food:', error)
      alert('Error creating food. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const onSubmit = async (e)=>{
    e.preventDefault();

    const formData = new FormData();

    formData.append('name', formInfo.name )
    formData.append('description', formInfo.description)
    formData.append("video", formInfo.video)

    const response = await axios.post('http://localhost:3000/api/food', formData, {
      withCredentials: true
    })

    console.log(response.data);
    navigate('/')
    
  }

  return (
    <div className="create-food-container">
      <div className="create-food-card">
        <div className="create-food-header">
          <div className="create-food-logo">
            <span>🍽️</span>
          </div>
          <h1 className="create-food-title">Create New Food</h1>
          <p className="create-food-subtitle">Share your delicious creation with the world</p>
        </div>

        <form className="create-food-form" onSubmit={onSubmit}>
          {/* Video Upload Field */}
          <div className="form-group">
            <label htmlFor="video" className="form-label">
              Food Video *
            </label>
            <div className="video-upload-container">
              <input
                type="file"
                id="video"
                name="video"
                accept="video/*"
                onChange={handleInputChange}
                className="video-input"
                required
              />
              <div className="video-upload-display">
                {formInfo.video ? (
                  <div className="video-preview">
                    <video
                      src={URL.createObjectURL(formInfo.video)}
                      controls
                      className="preview-video"
                    />
                    <p className="video-name">{formInfo.video.name}</p>
                  </div>
                ) : (
                  <div className="video-placeholder">
                    <div className="upload-icon">📹</div>
                    <p className="upload-text">Click to upload video</p>
                    <p className="upload-hint">MP4, MOV, AVI up to 100MB</p>
                  </div>
                )}
              </div>
            </div>
            {errors.video && <span className="error-message">{errors.video}</span>}
          </div>

          {/* Food Name Field */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Food Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formInfo.name}
              onChange={handleInputChange}
              placeholder="Enter the name of your dish"
              className={`form-input ${errors.name ? 'error' : ''}`}
              required
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          {/* Description Field */}
          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formInfo.description}
              onChange={handleInputChange}
              placeholder="Describe your dish, ingredients, cooking method, etc."
              className={`form-textarea ${errors.description ? 'error' : ''}`}
              rows="4"
              required
            />
            {errors.description && <span className="error-message">{errors.description}</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="create-food-submit"
            disabled={isSubmitting}
            
          >
            {isSubmitting ? (
              <>
                <span className="loading-spinner"></span>
                Creating...
              </>
            ) : (
              'Create Food'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateFood