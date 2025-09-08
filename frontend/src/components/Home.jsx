import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/variables.css';

const Home = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--spacing-md)'
    }}>
      <div style={{
        background: 'var(--bg-primary)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-xl)',
        padding: 'var(--spacing-2xl)',
        textAlign: 'center',
        maxWidth: '600px',
        width: '100%'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, var(--primary-color), var(--primary-hover))',
          borderRadius: 'var(--radius-lg)',
          margin: '0 auto var(--spacing-lg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-white)',
          fontSize: 'var(--font-size-4xl)'
        }}>
          🍽️
        </div>
        
        <h1 style={{
          fontSize: 'var(--font-size-4xl)',
          fontWeight: '700',
          color: 'var(--text-primary)',
          marginBottom: 'var(--spacing-md)'
        }}>
          Zomato with Reels
        </h1>
        
        <p style={{
          fontSize: 'var(--font-size-lg)',
          color: 'var(--text-secondary)',
          marginBottom: 'var(--spacing-2xl)'
        }}>
          Choose your role to get started
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-lg)',
          marginBottom: 'var(--spacing-xl)'
        }}>
          <div style={{
            padding: 'var(--spacing-xl)',
            border: '2px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            transition: 'all var(--transition-normal)'
          }}>
            <div style={{
              fontSize: 'var(--font-size-3xl)',
              marginBottom: 'var(--spacing-md)'
            }}>
              👤
            </div>
            <h3 style={{
              fontSize: 'var(--font-size-xl)',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: 'var(--spacing-sm)'
            }}>
              I'm a Customer
            </h3>
            <p style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--text-secondary)',
              marginBottom: 'var(--spacing-lg)'
            }}>
              Order delicious food from your favorite restaurants
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <Link 
                to="/user/login" 
                style={{
                  background: 'var(--primary-color)',
                  color: 'var(--text-white)',
                  padding: 'var(--spacing-md)',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all var(--transition-fast)'
                }}
              >
                Sign In
              </Link>
              <Link 
                to="/user/register" 
                style={{
                  background: 'transparent',
                  color: 'var(--primary-color)',
                  padding: 'var(--spacing-md)',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  fontWeight: '600',
                  border: '2px solid var(--primary-color)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                Create Account
              </Link>
            </div>
          </div>

          <div style={{
            padding: 'var(--spacing-xl)',
            border: '2px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            transition: 'all var(--transition-normal)'
          }}>
            <div style={{
              fontSize: 'var(--font-size-3xl)',
              marginBottom: 'var(--spacing-md)'
            }}>
              🏪
            </div>
            <h3 style={{
              fontSize: 'var(--font-size-xl)',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: 'var(--spacing-sm)'
            }}>
              I'm a Restaurant
            </h3>
            <p style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--text-secondary)',
              marginBottom: 'var(--spacing-lg)'
            }}>
              Join our platform and start delivering to customers
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <Link 
                to="/food-partner/login" 
                style={{
                  background: 'var(--primary-color)',
                  color: 'var(--text-white)',
                  padding: 'var(--spacing-md)',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all var(--transition-fast)'
                }}
              >
                Partner Login
              </Link>
              <Link 
                to="/food-partner/register" 
                style={{
                  background: 'transparent',
                  color: 'var(--primary-color)',
                  padding: 'var(--spacing-md)',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  fontWeight: '600',
                  border: '2px solid var(--primary-color)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                Join as Partner
              </Link>
            </div>
          </div>
        </div>

        <div style={{
          fontSize: 'var(--font-size-sm)',
          color: 'var(--text-muted)',
          textAlign: 'center',
          lineHeight: '1.5'
        }}>
          <p>Theme automatically adapts to your system settings (Light/Dark mode)</p>
          <p style={{ marginTop: 'var(--spacing-sm)' }}>
            📱 Fully responsive design - try resizing your browser or testing on mobile devices
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
