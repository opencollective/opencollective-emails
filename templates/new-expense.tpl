<Eymail>
  <OC.Header />

  <OC.Content>
    <H1>New expense submitted.</H1>

    <Divider height={32} />

    <P>
      We wanted to let you know that your collective{' '}
      <Link href="http://opencollective.com/skycatch">Skycatch</Link>, have a
      new expense. Details bellow.
    </P>

    <Divider height={32} />

    <H1>Expense details.</H1>

    <Divider height={32} />

    <OC.Data
      data={{
        'Submitted by.': (
          <Link href="http://opencollective.com/martha">Martha Loera</Link>
        ),
        'Expense.': '$34.88',
        'Details.': 'Domain renewal. Paid via PayPal',
      }}
    />

    <Divider height={32} />

    <OC.Actions>
      <OC.Button
        href="http://opencollective.com/approve"
        backgroundColor="#1f87ff"
      >
        Approve expense
      </OC.Button>
      <OC.Button
        href="http://opencollective.com/reject"
        backgroundColor="#ff0044"
      >
        Reject expense
      </OC.Button>
    </OC.Actions>
  </OC.Content>

  <OC.Footer />
</Eymail>
