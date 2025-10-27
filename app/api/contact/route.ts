// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'ELIoT Global <notifications@eliot.global>',
      to: ['automation@emmanuelslanka.com'], 
      replyTo: email, 
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
            <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f4f7fa;">
              <tr>
                <td align="center" style="padding: 40px 20px;">
                  <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    
                    <!-- Header -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); padding: 40px 30px; border-radius: 12px 12px 0 0; text-align: center;">
                        <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                          📬 New Contact Form Submission
                        </h1>
                        <p style="margin: 10px 0 0; color: #a5b4fc; font-size: 14px;">
                          Emmanuel's Lanka - IoT Solutions
                        </p>
                      </td>
                    </tr>
                    
                    <!-- Alert Banner -->
                    <tr>
                      <td style="padding: 20px 30px; background-color: #dbeafe; border-left: 4px solid #3b82f6;">
                        <p style="margin: 0; color: #1e40af; font-size: 14px; font-weight: 600;">
                          ⚡ Priority: New inquiry received - Respond within 24 hours
                        </p>
                      </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                      <td style="padding: 40px 30px;">
                        
                        <!-- Contact Information -->
                        <div style="margin-bottom: 30px;">
                          <h2 style="margin: 0 0 20px; color: #1e293b; font-size: 18px; font-weight: 600; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
                            Contact Information
                          </h2>
                          
                          <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                                <strong style="color: #475569; font-size: 14px; display: inline-block; min-width: 100px;">Name:</strong>
                                <span style="color: #1e293b; font-size: 14px;">${name}</span>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                                <strong style="color: #475569; font-size: 14px; display: inline-block; min-width: 100px;">Email:</strong>
                                <a href="mailto:${email}" style="color: #3b82f6; font-size: 14px; text-decoration: none;">${email}</a>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                                <strong style="color: #475569; font-size: 14px; display: inline-block; min-width: 100px;">Subject:</strong>
                                <span style="color: #1e293b; font-size: 14px; font-weight: 600;">${subject}</span>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 12px 0;">
                                <strong style="color: #475569; font-size: 14px; display: inline-block; min-width: 100px;">Received:</strong>
                                <span style="color: #64748b; font-size: 14px;">${new Date().toLocaleString('en-US', { 
                                  dateStyle: 'full', 
                                  timeStyle: 'short' 
                                })}</span>
                              </td>
                            </tr>
                          </table>
                        </div>
                        
                        <!-- Message Content -->
                        <div style="margin-bottom: 30px;">
                          <h2 style="margin: 0 0 15px; color: #1e293b; font-size: 18px; font-weight: 600; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
                            Message
                          </h2>
                          <div style="background-color: #f8fafc; border-left: 4px solid #06b6d4; padding: 20px; border-radius: 6px;">
                            <p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                          </div>
                        </div>
                        
                        <!-- Quick Actions -->
                        <div style="margin-top: 30px; padding: 20px; background-color: #f1f5f9; border-radius: 8px;">
                          <h3 style="margin: 0 0 15px; color: #1e293b; font-size: 16px; font-weight: 600;">
                            Quick Actions
                          </h3>
                          <table style="width: 100%;">
                            <tr>
                              <td style="padding: 8px 0;">
                                <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" 
                                   style="display: inline-block; padding: 12px 24px; background-color: #06b6d4; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: 600;">
                                  📧 Reply to ${name.split(' ')[0]}
                                </a>
                              </td>
                            </tr>
                          </table>
                        </div>
                        
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="padding: 30px; background-color: #f8fafc; border-radius: 0 0 12px 12px; border-top: 1px solid #e2e8f0;">
                        <p style="margin: 0 0 10px; color: #64748b; font-size: 13px; text-align: center;">
                          This email was sent from your website contact form
                        </p>
                        <p style="margin: 0; color: #94a3b8; font-size: 12px; text-align: center;">
                          ELIoT International (Pvt) Ltd. | Hettigama, St Francis Xavier Rd, Ja-Ela 11350<br>
                          <a href="tel:+94112232815" style="color: #06b6d4; text-decoration: none;">+94 11 2 232 815</a> | 
                          <a href="https://www.eliot.global" style="color: #06b6d4; text-decoration: none;">eliot.global</a>
                        </p>
                      </td>
                    </tr>
                    
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    })



    return NextResponse.json(
      { success: true, message: 'Email sent successfully', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}