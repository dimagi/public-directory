exports.onPreInit = () => console.log("Loaded OBH Providers Plugin")

const PROVIDER_NODE_TYPE = `ObhProvider`

function getLocalData(){
    return {providers: [
        { id: 1, name: `Mercy Hospital`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.` },
        { id: 2, name: `Jackson`, description: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.` },
    ]}
}

function getProductionData(){
    throw "FIXME"
}

exports.sourceNodes = async ({
    actions,
    createContentDigest,
    createNodeId,
    getNodesByType,
}, pluginOptions ) => {
    const { createNode } = actions

    const data = process.env.NODE_ENV === 'development' ? getLocalData() : getProductionData()

    data.providers.forEach(provider =>
      createNode({
        ...provider,
        id: createNodeId(`${PROVIDER_NODE_TYPE}-${provider.id}`),
        parent: null,
        children: [],
        internal: {
          type: PROVIDER_NODE_TYPE,
          content: JSON.stringify(provider),
          contentDigest: createContentDigest(provider),
        },
      })
    )

    return
}
