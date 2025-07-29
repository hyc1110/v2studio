// schemas/user.js

export default {
  name: 'user',
  title: '會員',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: '姓名',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email()
    },
    {
      name: 'phone',
      title: '電話',
      type: 'string'
    },
    {
      name: 'address',
      title: '地址',
      type: 'string'
    },
    {
      name: 'externalId',
      title: '驗證系統用 ID',
      type: 'string',
      description: '對應 Firebase、Clerk、NextAuth 的 user id'
    },
    {
      name: 'createdAt',
      title: '註冊時間',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }
  ]
}
