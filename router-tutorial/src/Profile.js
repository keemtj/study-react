import React from 'react';

const data = {
  velopert: {
    name: '김민준',
    description: '리액트를 좋아하는 개발자',
  },
  keem: {
    name: '김태진',
    description: '패캠 15기 바보',
  },
};

const Profile = ({ match }) => {
  console.log('[match]', match);
  console.log('[match.params]', match.params);
  console.log('[match.params.username]', match.params.username);
  const { username } = match.params;
  const profile = data[username];
  console.log(profile);
  console.log(profile.name);
  console.log(profile.description);

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
