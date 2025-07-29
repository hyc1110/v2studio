// schemas/order.js

export default {
  name: 'order',
  title: '訂單',
  type: 'document',
  fields: [
    {
      name: 'customerName',
      title: '顧客姓名',
      type: 'string'
    },
    {
      name: 'phone',
      title: '聯絡電話',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'pickupStore',
      title: '超商取貨門市',
      type: 'object',
      fields: [
        {
          name: 'storeType',
          title: '超商類型',
          type: 'string',
          options: {
            list: [
              { title: '7-11', value: '7-11' },
              { title: '全家', value: 'family' },
              { title: '萊爾富', value: 'hi-life' },
              { title: 'OK', value: 'ok' }
            ]
          }
        },
        {
          name: 'storeID',
          title: '門市代號',
          type: 'string'
        },
        {
          name: 'storeName',
          title: '門市名稱',
          type: 'string'
        },
        {
          name: 'storeAddress',
          title: '門市地址',
          type: 'string'
        }
      ]
    },
    {
      name: 'paymentMethod',
      title: '付款方式',
      type: 'string',
      options: {
        list: [
          { title: '貨到付款', value: 'cod' },
          { title: '銀行轉帳', value: 'bank' }
        ],
        layout: 'radio'
      }
    },
    {
      name: 'accountLast5',
      title: '轉帳帳號末五碼（若選擇轉帳）',
      type: 'string'
    },
    {
      name: 'products',
      title: '商品清單',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'product',
              title: '商品',
              type: 'reference',
              to: [{ type: 'product' }]
            },
            {
              name: 'quantity',
              title: '數量',
              type: 'number'
            }
          ]
        }
      ]
    },
    {
      name: 'total',
      title: '總金額',
      type: 'number'
    },
    {
      name: 'status',
      title: '訂單狀態',
      type: 'string',
      options: {
        list: [
          { title: '待付款', value: 'pending' },
          { title: '已付款', value: 'paid' },
          { title: '已出貨', value: 'shipped' },
          { title: '已送達', value: 'delivered' }
        ]
      }
    },
    {
  name: 'user',
  title: '會員',
  type: 'reference',
  to: [{ type: 'user' }]
    },
    {
      name: 'createdAt',
      title: '訂單時間',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }
  ]
}
