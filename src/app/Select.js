import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Select = () => {
  const [option, setOption] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const token = await AsyncStorage.getItem('auth');
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;
      setUserId(userId);
    };
    fetchUser();
  }, []);

  const updateUserGender = async () => {
    try {
      const response = await axios.put(`http://192.168.1.2:5000/users/${userId}/gender`, {
        gender: option,
      });

      console.log(response.data);

      if (response.status === 200) {
        // Redirect or navigate to the desired route without useHistory
        window.location.replace('/tabs/bio');
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <div style={{ flex: 1, backgroundColor: 'white', padding: 12 }}>
      <button
        onClick={() => setOption('male')}
        style={{
          backgroundColor: '#F0F0F0',
          padding: 12,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 25,
          borderRadius: 5,
          border: option === 'male' ? '1px solid #D0D0D0' : 'none',
        }}
      >
        <span style={{ fontFamily: 'monospace', fontSize: 16, fontWeight: 700 }}>I am a Man.</span>
        <img
          style={{ width: 50, height: 50 }}
          src="https://cdn-icons-png.flaticon.com/512/3233/3233508.png"
          alt="male"
        />
      </button>

      <button
        onClick={() => setOption('female')}
        style={{
          backgroundColor: '#F0F0F0',
          padding: 12,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 25,
          borderRadius: 5,
          border: option === 'female' ? '1px solid #D0D0D0' : 'none',
        }}
      >
        <span style={{ fontFamily: 'monospace', fontSize: 16, fontWeight: 700 }}>I am a woman.</span>
        <img
          style={{ width: 50, height: 50 }}
          src="https://cdn-icons-png.flaticon.com/256/1164/1164094.png"
          alt="female"
        />
      </button>

      <button
        onClick={() => setOption('nonbinary')}
        style={{
          backgroundColor: '#F0F0F0',
          padding: 12,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 25,
          borderRadius: 5,
          border: option === 'nonbinary' ? '1px solid #D0D0D0' : 'none',
        }}
      >
        <span style={{ fontFamily: 'monospace', fontSize: 16, fontWeight: 700 }}>I am non-binary.</span>
        <img
          style={{ width: 50, height: 50 }}
          src="https://cdn-icons-png.flaticon.com/512/7326/7326569.png"
          alt="nonbinary"
        />
      </button>
      
      {option && (
        <button
          onClick={updateUserGender}
          style={{
            marginTop: 25,
            backgroundColor: 'black',
            padding: 15,
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          <span style={{ fontFamily: 'monospace', textAlign: 'center', color: 'white', fontWeight: 600, fontSize: 16 }}>Done</span>
        </button>
      )}
    </div>
  );
};

export default Select;
