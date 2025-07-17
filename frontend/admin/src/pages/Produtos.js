import React, { useState } from 'react';
import { Form, Input, Button, Select, Upload } from 'antd';

export default function Produtos() {
  const [imagens, setImagens] = useState([]);

  const onFinish = (values) => {
    fetch('http://localhost:4000/produtos', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...values, imagens}),
    });
  };

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item label="Nome" name="nome" required><Input /></Form.Item>
      <Form.Item label="Descrição" name="descricao"><Input.TextArea /></Form.Item>
      <Form.Item label="Preço" name="preco" required><Input type="number" /></Form.Item>
      <Form.Item label="Tamanhos" name="tamanhos"><Select mode="multiple" options={[{value: 'P'}, {value: 'M'}, {value: 'G'}]} /></Form.Item>
      <Form.Item label="Cores" name="cores"><Select mode="multiple" options={[{value: 'Azul'}, {value: 'Rosa'}, {value: 'Amarelo'}]} /></Form.Item>
      <Upload
        listType="picture-card"
        maxCount={3}
        customRequest={({ file, onSuccess }) => {
          // Faça upload da imagem para Cloudinary/S3 e pegue a URL
          // setImagens([...imagens, url]);
          onSuccess("ok");
        }}
      >
        Adicionar Imagem (máx 3)
      </Upload>
      <Button type="primary" htmlType="submit">Salvar</Button>
    </Form>
  );
}