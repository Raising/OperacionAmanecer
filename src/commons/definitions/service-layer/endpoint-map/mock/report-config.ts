export default [
  {
    sectionIdentifier: -1,
    showTitleInReport: false,
    title: '',
    widgets: [
      {
        blocks: [
          {
            __type: 'RiimIndicator:#MON.Core.Information.Entities.Specific.ReportConfig.VisualBlock',
            asyncModelRequirementList: false,
            cols: 12,
            modelRequirementList: [
              {
                dataPath: 'calculatedDataModel.RIIM',
                rule: 'NOT_EMPTY',
              },
            ],
            title: null,
            type: 'RIIM_INDICATOR',
            config: {
              trend: 'calculatedDataModel.RIIM.RIIMEvolution',
              value: 'calculatedDataModel.RIIM.RIIMPercentValue',
            },
          },
        ],
        cols: 6,
        expansible: false,
        exportable: false,
        renderMode: 'STANDALONE',
        showVariation: false,
        title: 'info_sc_non_payment_risk',
        widgetIdentifier: 21,
      },
      {
        blocks: [
          {
            __type: 'RiimEvolutionGraph:#MON.Core.Information.Entities.Specific.ReportConfig.VisualBlock',
            asyncModelRequirementList: false,
            cols: 12,
            modelRequirementList: [
              {
                dataPath: 'behaviouralDataModel.RIIMEvolution12Months.RIIMEvolution12MonthsValues',
                rule: 'NOT_EMPTY',
              },
              {
                dataPath: 'behaviouralDataModel.RIIMEvolution12Months.RIIMEvolution12MonthsValues',
                rule: 'IS_ARRAY',
              },
              {
                dataPath: 'behaviouralDataModel.RIIMEvolution12Months.RIIMEvolution12MonthsValues',
                params: {
                  length: 2,
                },
                rule: 'MIN_ELEMENTS_ON_ARRAY',
              },
            ],
            title: 'non_payment_risk_evolution_riim',
            type: 'RIIM_EVOLUTION_GRAPH',
            config: {
              resourcePath: 'behaviouralDataModel.RIIMEvolution12Months.RIIMEvolution12MonthsValues',
            },
          },
        ],
        cols: 6,
        expansible: false,
        exportable: false,
        renderMode: 'STANDALONE',
        showVariation: false,
        title: 'info_sc_non_payment_risk',
        widgetIdentifier: 44,
      },
      {
        blocks: [
          {
            __type:
              'OutstandingRiskVsCreditLimitGraph:#MON.Core.Information.Entities.Specific.ReportConfig.VisualBlock',
            asyncModelRequirementList: false,
            cols: 12,
            modelRequirementList: [
              {
                dataPath: 'calculatedDataModel.creditLimit',
                rule: 'NOT_EMPTY',
              },
            ],
            title: null,
            type: 'OUTSTANDING_RISK_VS_CREDIT_LIMIT_GRAPH',
            config: {
              resourcePath: 'calculatedDataModel.creditLimit',
            },
          },
        ],
        cols: 6,
        expansible: false,
        exportable: false,
        showVariation: false,
        widgetIdentifier: 15,
        renderMode: 'STANDALONE',
        title: 'info_sc_credit_limit',
      },
      {
        blocks: [
          {
            __type: 'CustomerRowChartTable:#MON.Core.Information.Entities.Specific.ReportConfig.VisualBlock',
            asyncModelRequirementList: false,
            cols: 12,
            modelRequirementList: [
              {
                dataPath: 'behaviouralDataModel.RealRiskVSCreditLimitEvolution.Data',
                rule: 'NOT_EMPTY',
              },
              {
                dataPath: 'behaviouralDataModel.RealRiskVSCreditLimitEvolution.Data',
                rule: 'IS_ARRAY',
              },
              {
                dataPath: 'behaviouralDataModel.RealRiskVSCreditLimitEvolution.Data',
                params: {
                  length: 1,
                },
                rule: 'MIN_ELEMENTS_ON_ARRAY',
              },
              {
                dataPath: 'behaviouralDataModel.RealRiskVSCreditLimitEvolution.Data.0',
                rule: 'IS_ARRAY',
              },
              {
                dataPath: 'behaviouralDataModel.RealRiskVSCreditLimitEvolution.Data.0',
                params: {
                  length: 1,
                },
                rule: 'MIN_ELEMENTS_ON_ARRAY',
              },
              {
                dataPath: 'behaviouralDataModel.RealRiskVSCreditLimitEvolution.Data',
                rule: 'SUM_NUMERIC_ELEMENT_MATRIX_IS_GREATER_ZERO',
              },
            ],
            title: null,
            type: 'CUSTOMER_ROW_CHART_TABLE',
            config: {
              dataKey: 'RealRiskVSCreditLimitEvolution',
              displayEmptyRows: false,
              graphConfig: {
                cols: 10,
                dataPath: 'behaviouralDataModel.RealRiskVSCreditLimitEvolution',
                fields: [
                  {
                    Key: 1,
                    Value: 'bar',
                  },
                  {
                    Key: 3,
                    Value: 'bar',
                  },
                  {
                    Key: 0,
                    Value: 'line',
                  },
                ],
                globalResource: null,
                graphType: 'bar-line-one-axis',
                legendPosition: 'bottom',
                themeColor: ['Primary', 'Detail', 'Success'],
                validateElementsMoreThan: 2,
              },
              showGraphOnly: true,
              tableConfig: {
                columns: [
                  {
                    expansible: true,
                    key: 'RowTitles',
                    label: '',
                    type: 'Text',
                  },
                  {
                    expansible: false,
                    key: '0',
                    label: 'behaviouralDataModel.RealRiskVSCreditLimitEvolution.Columns.0',
                    type: null,
                  },
                  {
                    expansible: false,
                    key: '1',
                    label: 'behaviouralDataModel.RealRiskVSCreditLimitEvolution.Columns.1',
                    type: null,
                  },
                  {
                    expansible: false,
                    key: '2',
                    label: 'behaviouralDataModel.RealRiskVSCreditLimitEvolution.Columns.2',
                    type: null,
                  },
                  {
                    expansible: false,
                    key: '3',
                    label: 'behaviouralDataModel.RealRiskVSCreditLimitEvolution.Columns.3',
                    type: null,
                  },
                  {
                    expansible: false,
                    key: '4',
                    label: 'behaviouralDataModel.RealRiskVSCreditLimitEvolution.Columns.4',
                    type: null,
                  },
                  {
                    expansible: false,
                    key: '5',
                    label: 'behaviouralDataModel.RealRiskVSCreditLimitEvolution.Columns.5',
                    type: null,
                  },
                ],
                listCustomers: 'behaviouralDataModel.RealRiskVSCreditLimitEvolution.Customers',
                listGlobal: 'behaviouralDataModel.RealRiskVSCreditLimitEvolution',
                resolveCustomerTotal: true,
                rowConfigPath: 'behaviouralDataModel.RealRiskVSCreditLimitEvolution.Customers.0.RowTitles',
                showGraphOnly: false,
              },
            },
          },
        ],
        cols: 6,
        expansible: false,
        exportable: false,
        showVariation: false,
        widgetIdentifier: 8,
        renderMode: 'STANDALONE',
        title: 'info_sc_credit_limit',
      },
      {
        blocks: [
          {
            __type: 'CustomerRowChartTable:#MON.Core.Information.Entities.Specific.ReportConfig.VisualBlock',
            asyncModelRequirementList: false,
            cols: 12,
            modelRequirementList: [
              {
                dataPath: 'behaviouralDataModel.RealRisk.RealRiskData.Data',
                rule: 'NOT_EMPTY',
              },
              {
                dataPath: 'behaviouralDataModel.RealRisk.RealRiskData.Data',
                rule: 'IS_ARRAY',
              },
              {
                dataPath: 'behaviouralDataModel.RealRisk.RealRiskData.Data',
                params: {
                  length: 1,
                },
                rule: 'MIN_ELEMENTS_ON_ARRAY',
              },
              {
                dataPath: 'behaviouralDataModel.RealRisk.RealRiskData.Columns',
                rule: 'NOT_EMPTY',
              },
              {
                dataPath: 'behaviouralDataModel.RealRisk.RealRiskData.Columns',
                rule: 'IS_ARRAY',
              },
            ],
            title: null,
            type: 'CUSTOMER_ROW_CHART_TABLE',
            config: {
              dataKey: 'RealRiskEvolution',
              displayEmptyRows: false,
              graphConfig: {
                boldIfColumnsIndexIsNull: [2, 3],
                cols: 10,
                dataForIndex: true,
                dataPath: 'behaviouralDataModel.RealRisk',
                datasetIndex: 1,
                excludeGlobalRowPerTranslation: 'info_realRisk_totalrealrisk',
                fields: [
                  {
                    Key: 0,
                    Value: 'bar',
                  },
                  {
                    Key: 1,
                    Value: 'bar',
                  },
                  {
                    Key: 2,
                    Value: 'bar',
                  },
                  {
                    Key: 3,
                    Value: 'bar',
                  },
                  {
                    Key: 4,
                    Value: 'bar',
                  },
                  {
                    Key: 5,
                    Value: 'bar',
                  },
                  {
                    Key: 6,
                    Value: 'bar',
                  },
                  {
                    Key: 7,
                    Value: 'bar',
                  },
                  {
                    Key: 8,
                    Value: 'bar',
                  },
                  {
                    Key: 9,
                    Value: 'bar',
                  },
                ],
                globalResource: 'RealRiskData',
                graphType: 'bar-line-one-axis',
                hiddeXLabels: true,
                legendPosition: 'right',
                themeColor: [
                  'Detail',
                  'Success',
                  'Error',
                  'ErrorDarker',
                  'SuccessDarker',
                  'SecondaryLight',
                  'Warning',
                  'DetailDarker',
                  'ErrorLighter',
                ],
              },
              link: 'BillingDetails',
              linkLabel: 'info_realRisk_verFacturas',
              showGraphOnly: true,
              tableConfig: {
                columns: [
                  {
                    expansible: true,
                    key: 'RowTitles',
                    label: '',
                    type: 'Text',
                  },
                  {
                    expansible: false,
                    key: '0',
                    label: 'behaviouralDataModel.RealRisk.RealRiskData.Columns.0',
                    type: 'Number',
                  },
                  {
                    expansible: false,
                    key: '1',
                    label: 'behaviouralDataModel.RealRisk.RealRiskData.Columns.1',
                    type: 'Currency',
                  },
                  {
                    expansible: false,
                    key: '2',
                    label: 'behaviouralDataModel.RealRisk.RealRiskData.Columns.2',
                    type: 'Text',
                  },
                  {
                    expansible: false,
                    key: '3',
                    label: 'behaviouralDataModel.RealRisk.RealRiskData.Columns.3',
                    type: 'Text',
                  },
                ],
                listCustomers: 'behaviouralDataModel.RealRisk.Customers',
                listGlobal: 'behaviouralDataModel.RealRisk.RealRiskData',
                rowConfigPath: 'behaviouralDataModel.RealRisk.RealRiskData.RowTitles',
                showGraphOnly: false,
              },
            },
          },
        ],
        cols: 6,
        expansible: false,
        exportable: false,
        renderMode: 'STANDALONE',
        showVariation: false,
        widgetIdentifier: 31,
        title: 'expired_debt',
      },
      {
        blocks: [
          {
            __type: 'DelayOfOverdueDebt:#MON.Core.Information.Entities.Specific.ReportConfig.VisualBlock',
            asyncModelRequirementList: false,
            cols: 12,
            modelRequirementList: [
              {
                dataPath: 'behaviouralDataModel.DebtDueDelay.DebtDueDelayData.ComplexData',
                rule: 'NOT_EMPTY',
              },
              {
                dataPath: 'behaviouralDataModel.DebtDueDelay.DebtDueDelayData.ComplexData',
                rule: 'IS_ARRAY',
              },
              {
                dataPath: 'behaviouralDataModel.DebtDueDelay.DebtDueDelayData.ComplexData',
                params: {
                  length: 1,
                },
                rule: 'MIN_ELEMENTS_ON_ARRAY',
              },
            ],
            title: null,
            type: 'DELAY_OF_OVERDUE_DEBT',
            config: {
              cols: 10,
              columns: [
                {
                  key: 'behaviouralDataModel.DebtDueDelay.DebtDueDelayData.ComplexData.0.Values.0.Column',
                  label: 'behaviouralDataModel.DebtDueDelay.DebtDueDelayData.ComplexData.0.Values.0.Column',
                },
                {
                  key: 'behaviouralDataModel.DebtDueDelay.DebtDueDelayData.ComplexData.0.Values.1.Column',
                  label: 'behaviouralDataModel.DebtDueDelay.DebtDueDelayData.ComplexData.0.Values.1.Column',
                },
                {
                  key: 'behaviouralDataModel.DebtDueDelay.DebtDueDelayData.ComplexData.0.Values.2.Column',
                  label: 'behaviouralDataModel.DebtDueDelay.DebtDueDelayData.ComplexData.0.Values.2.Column',
                },
                {
                  key: 'behaviouralDataModel.DebtDueDelay.DebtDueDelayData.ComplexData.0.Values.3.Column',
                  label: 'behaviouralDataModel.DebtDueDelay.DebtDueDelayData.ComplexData.0.Values.3.Column',
                },
                {
                  key: 'behaviouralDataModel.DebtDueDelay.DebtDueDelayData.ComplexData.0.Values.4.Column',
                  label: 'behaviouralDataModel.DebtDueDelay.DebtDueDelayData.ComplexData.0.Values.4.Column',
                },
                {
                  key: 'behaviouralDataModel.DebtDueDelay.DebtDueDelayData.ComplexData.0.Values.5.Column',
                  label: 'behaviouralDataModel.DebtDueDelay.DebtDueDelayData.ComplexData.0.Values.5.Column',
                },
              ],
              displayEmptyRows: false,
              legendPosition: 'bottom',
              listCustomers: 'behaviouralDataModel.DebtDueDelay.Customers',
              listGlobal: 'behaviouralDataModel.DebtDueDelay.DebtDueDelayData',
              themeColor: [
                'Info',
                'Success',
                'SuccessLighter',
                'WarningLighter',
                'Warning',
                'ErrorLighter',
                'Error',
                'ErrorDarker',
              ],
              showGraphOnly: true,
            },
          },
        ],
        cols: 6,
        expansible: false,
        exportable: false,
        showVariation: false,
        widgetIdentifier: 35,
        renderMode: 'STANDALONE',
        title: 'expired_debt',
      },
      {
        blocks: [
          {
            __type: 'IcpIndicatorArray:#MON.Core.Information.Entities.Specific.ReportConfig.VisualBlock',
            cols: 12,
            modelRequirementList: [
              {
                dataPath: 'calculatedDataModel.paymentBehaviour.Indicators',
                rule: 'NOT_EMPTY',
              },
            ],
            title: null,
            type: 'ICP_INDICATOR_ARRAY',
            config: {
              columns: 1,
              elements: ['ICPEntity', 'ICPOtherProviders'],
              resourcePath: 'calculatedDataModel.paymentBehaviour.Indicators',
            },
          },
        ],
        cols: 6,
        renderMode: 'STANDALONE',
        title: 'info_wd_payment_behavior_in_summary',
        widgetIdentifier: 16,
      },
      {
        blocks: [
          {
            __type: 'LineGraph:#MON.Core.Information.Entities.Specific.ReportConfig.VisualBlock',
            asyncModelRequirementList: false,
            cols: 12,
            modelRequirementList: [
              {
                dataPath: 'behaviouralDataModel.ICPEvolution.ICPEvolutionData.Data',
                rule: 'NOT_EMPTY',
              },
              {
                dataPath: 'behaviouralDataModel.ICPEvolution.ICPEvolutionData.Data',
                rule: 'IS_ARRAY',
              },
              {
                dataPath: 'behaviouralDataModel.ICPEvolution.ICPEvolutionData.Data',
                params: {
                  length: 2,
                },
                rule: 'MIN_ELEMENTS_ON_ARRAY',
              },
              {
                dataPath: 'behaviouralDataModel.ICPEvolution.ICPEvolutionData.Data',
                params: {
                  length: 1,
                },
                rule: 'NUMERIC_ELEMENT_MATRIX_GREATER_THAN_ZERO',
              },
            ],
            title: null,
            type: 'LINE_GRAPH',
            config: {
              colors: ['Success', 'Detail', 'Info'],
              columnsLabels: 'behaviouralDataModel.ICPEvolution.ICPEvolutionData.Columns',
              graphData: 'behaviouralDataModel.ICPEvolution.ICPEvolutionData.Data',
              legendLabels: 'behaviouralDataModel.ICPEvolution.ICPEvolutionData.RowTitles',
            },
          },
        ],
        cols: 6,
        expansible: false,
        exportable: false,
        renderMode: 'STANDALONE',
        showVariation: false,
        widgetIdentifier: 13,
        title: 'info_wd_payment_behavior_in_summary',
      },
      {
        blocks: [
          {
            __type: 'IcpIndicatorArray:#MON.Core.Information.Entities.Specific.ReportConfig.VisualBlock',
            asyncModelRequirementList: false,
            cols: 12,
            modelRequirementList: [
              {
                dataPath: 'unifiedModel.RiskIndicators.RiskIndicatorsList',
                rule: 'NOT_EMPTY',
              },
              {
                dataPath: 'unifiedModel.RiskIndicators.RiskIndicatorsList',
                params: {
                  propertyKey: 'Type',
                  propertyValue: 'PublicBehaviourWithPublicAdministrations',
                },
                rule: 'FIND_PROPERTY_IN_OBJECT_ARRAY',
              },
            ],
            title: null,
            type: 'ICP_INDICATOR_ARRAY',
            config: {
              columns: 1,
              elements: ['ICPPublicAdministration'],
              resourcePath: 'calculatedDataModel.paymentBehaviour.Indicators',
            },
          },
        ],
        cols: 6,
        expansible: false,
        exportable: false,
        showVariation: false,
        widgetIdentifier: 16,
        renderMode: 'STANDALONE',
        title: 'Impago Administración Pública y Entidades Financieras y Comerciales',
      },
    ],
  },
];
