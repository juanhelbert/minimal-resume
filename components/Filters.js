import { Grid, Select, Text, useTheme, useMediaQuery } from '@zeit-ui/react'

const Filters = ({ data, filteredAmount, technologyChanged, typeChanged }) => {
  const { filters, types, projects } = data
  const { palette } = useTheme()
  const isXS = useMediaQuery('xs', { match: 'down' })

  const total = projects.length
  const condition = filteredAmount === total ? <strong>all</strong> : <strong>{filteredAmount}</strong>
  const finalWord = filteredAmount === 1 ? 'project' : 'projects'

  return (
    <>
      <Grid.Container justify='space-between' alignItems='center' className='filters' >
        <Text className='mobile-reorder' p>Showing {condition} {finalWord} </Text>
        <div className='selects-wrapper'>
          <Select
            size='small'
            placeholder='Type of project'
            style={{ height: '40px', marginRight: `${isXS ? '4%' : '12px'}` }}
            onChange={e => typeChanged(e)}
          >
            {types.map(item =>
              <Select.Option key={item} value={item} style={{ color: palette.accents_7 }}>{item}</Select.Option>
            )}
          </Select >
          <Select
            size='small'
            placeholder='Technology'
            style={{ height: '40px' }}
            onChange={e => technologyChanged(e)}
          >
            {filters.map(item =>
              <Select.Option key={item} value={item} style={{ color: palette.accents_7 }}>{item}</Select.Option>
            )}
          </Select >
        </div>
      </Grid.Container >
      <style global jsx>{`
        #__next .filters .selects-wrapper {
          width: ${isXS && '100%'};
        }

        #__next .filters .selects-wrapper > div{
          width: ${isXS ? '48%' : '150px'};
        }

        #__next .filters .mobile-reorder {
          order: ${isXS ? 2 : 0};
          width: ${isXS && '100%'};
        }
      `}</style>
    </>
  )
}

export { Filters }