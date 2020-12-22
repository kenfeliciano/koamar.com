import * as React from 'react'

import tw, { styled } from 'twin.macro'

const ContentWrapper = styled.div(() => [tw`p-4 mx-4 mt-6 bg-surface rounded-lg shadow-lg`])

export const Content = ({ children }) => <ContentWrapper>{children}</ContentWrapper>
