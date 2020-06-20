import { Grid, Select, Text, useTheme } from '@zeit-ui/react'

const Filters = ({ data, filteredAmount, parentCallback }) => {
  const { filters, projects } = data
  const { palette } = useTheme()
  const total = projects.length
  const condition = filteredAmount === total ? <strong>all</strong> : <><strong>{filteredAmount}</strong> of <strong>{projects.length}</strong></>

  return (
    <Grid.Container justify='space-between'>
      <Text p>Showing {condition} projects. </Text>
      <Select
        multiple
        placeholder='Select a filter'
        style={{ minWidth: '250px', maxWidth: '450px' }}
        onChange={e => parentCallback(e)}
      >
        {filters.map(item =>
          <Select.Option key={item} value={item} style={{ color: palette.accents_7 }}>{item}</Select.Option>
        )}
      </Select >
    </Grid.Container >
  )
}

export { Filters }