import React from 'react'
import { Result,Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PATH_DASHBOARD } from 'routes/path';

export default function NotFoundpage() {
  const navigate = useNavigate()
  return (
    <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary" onClick={() => navigate(PATH_DASHBOARD)}>Back Home</Button>}
  />
  )
}
