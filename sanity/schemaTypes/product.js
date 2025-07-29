export default {
  name: 'product',
  title: '商品',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: '商品名稱',
      type: 'string',
    },
    {
      name: 'slug',
      title: '網址代稱（slug）',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
    },
    {
      name: 'price',
      title: '價格',
      type: 'number',
    },
    {
      name: 'brand',
      title: '品牌',
      type: 'string',
    },
    {
      name: 'category',
      title: '分類',
      type: 'string',
    },
    {
      name: 'description',
      title: '商品描述',
      type: 'text',
    },
    {
      name: 'image',
      title: '商品圖片',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'inStock',
      title: '庫存是否開放',
      type: 'boolean',
    },
  ],
}
